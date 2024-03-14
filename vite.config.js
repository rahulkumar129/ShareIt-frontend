import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://share-it-backend-six.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/auth': {
        target: 'https://share-it-backend-six.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      }
    },
  },
});
