import typography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';
import digitalAgencyDesignSystem from 'digital-agency-design-system';
import digitalAgencyDesignSystemTypography from 'digital-agency-design-system/src/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    'src/**/*.{astro,ts}',
    'node_modules/microcms-field-extensions/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans JP', 'sans-serif'],
      mono: ['IBM Plex Mono', 'IBM Plex Sans JP', 'monospace'],
    },
    typography: digitalAgencyDesignSystemTypography,
    extend: {},
  },
  plugins: [typography, digitalAgencyDesignSystem, addDynamicIconSelectors()],
};

export default config;
