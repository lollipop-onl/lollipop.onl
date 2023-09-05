import { family as NotoSansJP } from '@fontsource/ibm-plex-sans-jp/metadata.json' assert { type: 'json' };
import typography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';
import digitalAgencyDesignSystem from 'digital-agency-design-system';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    'src/**/*.{astro,ts}',
    'node_modules/microcms-field-extensions/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: [NotoSansJP, 'sans-serif'],
    },
    extend: {},
  },
  plugins: [typography, digitalAgencyDesignSystem, addDynamicIconSelectors()],
};

export default config;
