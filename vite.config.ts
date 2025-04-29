import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'app': resolve(__dirname, './src/app'),
      'pages': resolve(__dirname, './src/pages'),
      'widgets': resolve(__dirname, './src/widgets'),
      'features': resolve(__dirname, './src/features'),
      'entities': resolve(__dirname, './src/entities'),
      'shared': resolve(__dirname, './src/shared')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/base/variables"; @import "@/assets/scss/base/mixins";`
      }
    }
  },
  server: {
    proxy: {
      '/hp/api': {
        target: 'https://www.kingsrockcc.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
