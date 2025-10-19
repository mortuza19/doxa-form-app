import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/doxa-form-app/",
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@common': path.resolve(__dirname, 'src/components/Common'),
      '@landing': path.resolve(__dirname, 'src/components/Landing'),
      // add more aliases if needed
    },
  },
})
