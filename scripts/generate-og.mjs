import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const W = 1200
const H = 630
const AVATAR_SIZE = 360
const AVATAR_CX = W - 260
const AVATAR_CY = H / 2

const profileBuf = readFileSync(resolve(root, 'public/images/profile/louis-sader.jpeg'))
const avatar = await sharp(profileBuf)
  .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover', position: 'top' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><circle cx="${AVATAR_SIZE / 2}" cy="${AVATAR_SIZE / 2}" r="${AVATAR_SIZE / 2}" fill="#fff"/></svg>`
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer()

const bg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1224"/>
      <stop offset="55%" stop-color="#0b1f3a"/>
      <stop offset="100%" stop-color="#04070f"/>
    </linearGradient>
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="180" cy="120" r="320" fill="url(#orb1)"/>
  <circle cx="${W - 120}" cy="${H - 60}" r="360" fill="url(#orb2)"/>

  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accent)"/>

  <g font-family="system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif" fill="#ffffff">
    <text x="80" y="190" font-size="34" font-weight="700" letter-spacing="6" fill="#7dd3fc">LOUIS SADER</text>
    <text x="80" y="298" font-size="86" font-weight="800">Portfolio</text>
    <text x="80" y="392" font-size="86" font-weight="800" fill="#22d3ee">Website</text>
    <text x="80" y="468" font-size="28" font-weight="500" fill="#cbd5e1">DevOps Software Developer</text>
    <text x="80" y="510" font-size="22" font-weight="500" fill="#94a3b8">AWS Certified | NCAA Athlete | RWU '25</text>
  </g>

  <circle cx="${AVATAR_CX}" cy="${AVATAR_CY}" r="${AVATAR_SIZE / 2 + 10}" fill="none" stroke="#22d3ee" stroke-width="4"/>
</svg>`

const final = await sharp(Buffer.from(bg))
  .composite([
    {
      input: avatar,
      left: AVATAR_CX - AVATAR_SIZE / 2,
      top: AVATAR_CY - AVATAR_SIZE / 2,
    },
  ])
  .png({ quality: 92, compressionLevel: 9 })
  .toBuffer()

writeFileSync(resolve(root, 'public/og-image.png'), final)
console.log(`wrote public/og-image.png (${(final.length / 1024).toFixed(1)} KB)`)
