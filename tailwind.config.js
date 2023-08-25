import typography from "@tailwindcss/typography";
import { family as ZenMaruGothic } from "@fontsource/zen-maru-gothic/metadata.json" assert { type: "json" };
import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{svelte,ts}"],
  theme: {
    fontFamily: {
      body: [ZenMaruGothic, "sans-serif"],
    },
    extend: {
      colors: {
        background: "#0F172A",
        foreground: "#1E293B",
        link: {
          DEFAULT: "#38bdf8",
        },
        body: "#eee",
      },
    },
  },
  plugins: [typography, addDynamicIconSelectors()],
};

export default config;
