// Post-build prerender for the single-route React SPA.
//
// Vite ships an empty <div id="root"></div>, so crawlers and link-preview bots
// see no content. This script serves the built dist/ with Vite's preview server,
// renders it with headless Chrome, and bakes the resulting DOM back into the
// HTML files that Vercel deploys:
//
//   /            -> dist/index.html   (real home content in the markup)
//   any 404 path -> dist/404.html     (styled NotFound view Vercel serves as 404)
//
// The client bundle still loads and re-renders via createRoot(), so there is no
// hydration mismatch; the baked markup exists purely so bots read real text.

import { preview } from 'vite'
import puppeteer from 'puppeteer-core'
import { writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const PORT = 4183

// Vercel's build image has no system Chrome and is missing shared libs
// (libnss3 etc.), so bundled Chromium can't launch there. @sparticuz/chromium
// ships a Linux/serverless-ready Chromium; locally we point puppeteer-core at a
// normal Chrome install instead.
const onVercel = Boolean(process.env.VERCEL || process.env.CI)

async function launchBrowser() {
  if (onVercel) {
    const { default: chromium } = await import('@sparticuz/chromium')
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  }
  const localChrome =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  if (!existsSync(localChrome)) {
    throw new Error(
      `No local Chrome at ${localChrome}. Set PUPPETEER_EXECUTABLE_PATH to a Chrome/Chromium binary.`
    )
  }
  return puppeteer.launch({
    executablePath: localChrome,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
}

// Routes to bake. `out` is the file written under dist/.
const ROUTES = [
  { path: '/', out: 'index.html' },
  { path: '/__prerender_404__', out: '404.html' },
]

async function capture(browser, origin, route) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.goto(origin + route.path, { waitUntil: 'networkidle0', timeout: 60000 })
  // Wait for React to populate #root, then a short settle for framer-motion.
  await page.waitForSelector('#root > *', { timeout: 30000 })
  await new Promise((r) => setTimeout(r, 400))
  const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)
  await page.close()
  writeFileSync(resolve(distDir, route.out), html, 'utf8')
  console.log(`  prerendered ${route.path} -> dist/${route.out} (${html.length} bytes)`)
}

async function main() {
  const server = await preview({
    preview: { port: PORT, strictPort: true },
    // Silence the preview server's own request logging.
    logLevel: 'warn',
  })
  const origin = `http://localhost:${PORT}`
  console.log(`prerender: serving dist/ at ${origin} (${onVercel ? 'sparticuz chromium' : 'local chrome'})`)

  const browser = await launchBrowser()

  try {
    for (const route of ROUTES) {
      await capture(browser, origin, route)
    }
  } finally {
    await browser.close()
    await new Promise((r) => server.httpServer.close(r))
  }
  console.log('prerender: done')
}

main().catch((err) => {
  console.error('prerender failed:', err)
  process.exit(1)
})
