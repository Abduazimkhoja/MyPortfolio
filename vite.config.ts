import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         // '@': path.resolve(__dirname, './src'),
         '@ui': path.resolve(__dirname, './src/components/ui'),
         '@screens': path.resolve(__dirname, './src/components/screens'),
         '@hooks': path.resolve(__dirname, './src/hooks'),
         '@interface': path.resolve(__dirname, './src/interface'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@components': path.resolve(__dirname, './src/components'),
         '@styles': path.resolve(__dirname, './src/assets/styles')
      }
   }
})
