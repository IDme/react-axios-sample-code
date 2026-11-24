import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Redirect URIs are registered against port 3000.
const port = { port: 3000, strictPort: true };

export default defineConfig({
  plugins: [react()],
  server: { ...port, open: true },
  preview: port,
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
  },
});
