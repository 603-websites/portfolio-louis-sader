import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // manualChunks only applies to the client bundle. In the SSR build (used by
    // scripts/prerender.mjs) react/framer-motion are externalized, so splitting
    // them into chunks is both meaningless and a rollup error.
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Split heavy, rarely-changing vendor code into its own chunk so
            // repeat visitors cache it across content deploys.
            manualChunks: {
              react: ['react', 'react-dom'],
              motion: ['framer-motion'],
              icons: ['lucide-react'],
            },
          },
        },
  },
}))
