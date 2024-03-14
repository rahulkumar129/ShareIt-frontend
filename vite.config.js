import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://test-eb7z.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/auth': {
        target: 'https://test-eb7z.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      }
    },
  },
});
