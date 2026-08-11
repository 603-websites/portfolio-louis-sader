const { join } = require('node:path')

// Keep Puppeteer's Chromium download inside the project so the install step and
// the build-time prerender agree on one path. Without this, Vercel downloads
// Chromium to ~/.cache during `npm install` but the build step can fail to find
// it. Project-local keeps it deterministic across environments.
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
}
