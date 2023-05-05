import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfjs-dist': 'pdfjs-dist/es5/build/pdf'
    }
  },
  module: {
    rules: [
      {
        test: /pdf\.worker\.(min\.)?js/,
        use: [{
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        }],
      },
    ],
  },
})
