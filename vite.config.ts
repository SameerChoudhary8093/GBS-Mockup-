import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    mode === "development" && screenGraphPlugin(),
  ],
  publicDir: "./static",
  base: "./",
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "es", // ES modules for better deployment compatibility
        manualChunks: undefined,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));


