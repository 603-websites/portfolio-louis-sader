// Server entry used only at build time by scripts/prerender.mjs. Renders the app
// to a static HTML string so real content is baked into dist/index.html and
// dist/404.html without needing a headless browser (which Vercel's build image
// cannot run). The client still hydrates via createRoot in main.jsx.
import { renderToString } from 'react-dom/server'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'

export function render(pathname) {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <App pathname={pathname} />
    </MotionConfig>
  )
}
