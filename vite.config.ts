import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/logs-monitor/",
  server: {
    proxy: {
      "/powerbi-cron": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/powerbi-cron/, ""),
      },
    },
  },
});
