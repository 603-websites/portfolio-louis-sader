// Post-build static prerender for the single-route React SPA.
//
// Vite ships an empty <div id="root"></div>, so crawlers and link-preview bots
// see no content, and the old catch-all rewrite made every unknown path return
// 200 with the homepage (soft 404). This script renders the app to a static
// HTML string with react-dom/server (no headless browser -- Vercel's build
// image can't launch Chromium) and bakes it into the deployed HTML:
//
//   /            -> dist/index.html   (real home content in the markup)
//   any 404 path -> dist/404.html     (styled NotFound view Vercel serves as 404)
//
// The client bundle still loads and re-renders via createRoot(), so the markup
// exists purely so bots read real text.

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')
const serverEntry = resolve(__dirname, '..', 'dist-server', 'entry-server.js')

const ROUTES = [
  { pathname: '/', out: 'index.html' },
  { pathname: '/__prerender_404__', out: '404.html' },
]

const ROOT_RE = /<div id="root"><\/div>/

async function main() {
  const { render } = await import(pathToFileURL(serverEntry).href)
  const template = readFileSync(resolve(distDir, 'index.html'), 'utf8')

  if (!ROOT_RE.test(template)) {
    throw new Error('prerender: could not find empty <div id="root"></div> in dist/index.html')
  }

  for (const route of ROUTES) {
    const appHtml = render(route.pathname)
    const html = template.replace(ROOT_RE, `<div id="root">${appHtml}</div>`)
    writeFileSync(resolve(distDir, route.out), html, 'utf8')
    console.log(`  prerendered ${route.pathname} -> dist/${route.out} (${html.length} bytes)`)
  }
  console.log('prerender: done')
}

main().catch((err) => {
  console.error('prerender failed:', err)
  process.exit(1)
})
