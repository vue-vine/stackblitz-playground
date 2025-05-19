import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VineVitePlugin } from 'vue-vine/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    VineVitePlugin(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
