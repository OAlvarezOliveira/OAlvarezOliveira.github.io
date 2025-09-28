import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite + React con base para repo de usuario (oalvarezoliveira.github.io)
export default defineConfig({
  base: '/', // para repos de usuario/organización en GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
  },
})
