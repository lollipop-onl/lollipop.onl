import typography from "@tailwindcss/typography";
import { family as ZenMaruGothic } from "@fontsource/zen-maru-gothic/metadata.json" assert { type: "json" };
import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{svelte,ts,html}"],
  theme: {
    fontFamily: {
      body: [ZenMaruGothic, "sans-serif"],
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#071422",
          profile: "#0B1B2B",
          post: "#112131",
        },
        prose: {
          body: "#AFC2D4",
          title: "#E7EDF4",
          subtitle: "#C4D4E3",
        },
        brand: "#3294F8",
      },
    },
  },
  plugins: [typography, addDynamicIconSelectors()],
};

export default config;
