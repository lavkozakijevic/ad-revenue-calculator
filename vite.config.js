import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name must match your GitHub repo
export default defineConfig({
  base: '/ad-revenue-calculator/',
  plugins: [react()],
})
