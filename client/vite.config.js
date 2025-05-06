import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //'/api/files': 'http://localhost:6600',   //for local host
      "/api/files": "https://fileflow-fileshare.onrender.com/",  // deployed  
    },
  },
})