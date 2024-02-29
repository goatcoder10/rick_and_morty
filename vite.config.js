import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://goatcoder10.github.io/rick_and_morty/',
  plugins: [react()],
})
