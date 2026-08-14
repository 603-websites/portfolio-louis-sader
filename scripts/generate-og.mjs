import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const W = 1200
const H = 630

// Text-only card: Patriots nautical navy with silver / steel-blue accents.
// No profile photo by design.
const bg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#001028"/>
      <stop offset="55%" stop-color="#002244"/>
      <stop offset="100%" stop-color="#000d1f"/>
    </linearGradient>
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4d7fad" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#4d7fad" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7aa5cc" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#7aa5cc" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7aa5cc"/>
      <stop offset="100%" stop-color="#b0b7bc"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="200" cy="140" r="340" fill="url(#orb1)"/>
  <circle cx="${W - 160}" cy="${H - 80}" r="380" fill="url(#orb2)"/>

  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accent)"/>

  <g font-family="system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif" fill="#ffffff" text-anchor="middle">
    <text x="${W / 2}" y="215" font-size="36" font-weight="700" letter-spacing="10" fill="#b0b7bc">LOUISSADER.COM</text>
    <text x="${W / 2}" y="330" font-size="92" font-weight="800">Louis Sader</text>
    <text x="${W / 2}" y="415" font-size="40" font-weight="600" fill="#7aa5cc">DevOps Software Developer</text>
    <text x="${W / 2}" y="480" font-size="26" font-weight="500" fill="#d6dadd">AWS Certified | Security+ | NCAA Athlete</text>
  </g>
</svg>`

const final = await sharp(Buffer.from(bg))
  .png({ quality: 92, compressionLevel: 9 })
  .toBuffer()

writeFileSync(resolve(root, 'public/og-image.png'), final)
console.log(`wrote public/og-image.png (${(final.length / 1024).toFixed(1)} KB)`)

// Apple touch icon: 180x180 render of the navy favicon mark.
const faviconSvg = readFileSync(resolve(root, 'public/favicon.svg'))
const touch = await sharp(faviconSvg, { density: 300 })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toBuffer()

writeFileSync(resolve(root, 'public/apple-touch-icon.png'), touch)
console.log(`wrote public/apple-touch-icon.png (${(touch.length / 1024).toFixed(1)} KB)`)
