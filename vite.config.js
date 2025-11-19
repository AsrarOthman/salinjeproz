import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true,   // biar boleh access dari device lain
    port: 8888    // tukar sini ikut suka, contoh 3000
  }
})
