import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@page': '/src/page',
      '@components': '/src/components',
      '@components/module': '/src/components/module/',
      '@components/template': '/src/components/template/',
      '@utils': 'src/utils',
      '@hooks': 'src/hooks',
    },
  },
});