import { family as ZenMaruGothic } from '@fontsource/zen-maru-gothic/metadata.json' assert { type: "json" };

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    fontFamily: {
      body: [ZenMaruGothic, 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
};

export default config;
