import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": `http://localhost:${process.env.PORT || 4000}`,
			"/auth": `http://localhost:${process.env.PORT || 4000}`,
		},
	},
});
