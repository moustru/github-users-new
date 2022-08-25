import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  css: {
    postcss: {
      plugins: [autoprefixer, cssnano],
    },
  },
  server: {
    port: 8080,
  },
});
