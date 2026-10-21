import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',
    // Inline tiny assets directly into CSS (saves round-trips)
    assetsInlineLimit: 4096,
    // Split CSS per chunk for better caching
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep chunk names stable for long-term caching
        manualChunks: (id: string) => {
          if (id.includes('node_modules/framer-motion')) return 'motion'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor'
          if (id.includes('node_modules/lucide-react')) return 'icons'
        },
        // Stable filenames for better CDN caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
