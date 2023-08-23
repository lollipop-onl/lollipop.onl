import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});