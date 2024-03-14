import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": `{https://test-eb7z.vercel.app}`,
      "/auth": `{https://test-eb7z.vercel.app}`,
    },
  },
});
