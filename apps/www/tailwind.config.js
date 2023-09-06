import { family as IBMPlexSansJP } from '@fontsource/ibm-plex-sans-jp/metadata.json' assert { type: 'json' };
import { family as NotoEmoji } from '@fontsource/noto-emoji/metadata.json' assert { type: 'json' };
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
      sans: [IBMPlexSansJP, NotoEmoji, 'sans-serif'],
    },
    extend: {},
  },
  plugins: [typography, digitalAgencyDesignSystem, addDynamicIconSelectors()],
};

export default config;
