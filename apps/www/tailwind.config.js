import { family as NotoSansJP } from '@fontsource/ibm-plex-sans-jp/metadata.json' assert { type: 'json' };
import typography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    'src/**/*.{astro,ts}',
    'node_modules/microcms-field-extensions/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      md: '768px',
    },
    fontFamily: {
      sans: [NotoSansJP, 'sans-serif'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      '4xl': '2.25rem /* 36px */',
      '3xl': '2rem /* 32px */',
      '2xl': '1.75rem /* 28px */',
      xl: '1.5rem /* 24px */',
      lg: '1.25rem /* 20px */',
      md: '1rem /* 16px */',
      sm: '0.875rem /* 14px */',
      xs: '0.75rem /* 12px */',
      '2xs': '0.625rem /* 10px */',
    },
    colors: {
      white: '#ffffff',
      sea: {
        1200: '#00004f',
        1100: '#000060',
        1000: '#000071',
        900: '#000082',
        800: '#0017c1',
        700: '#0031d8',
        600: '#1a3ee8',
        500: '#264af4',
        400: '#4929f5',
        300: '#7096f8',
        200: '#9db7f9',
        100: '#c5d7fb',
        50: '#e8f1fe',
      },
      sumi: {
        1200: '#000000',
        1100: '#080808',
        1000: '#111111',
        900: '#1a1a1c',
        800: '#414143',
        700: '#626264',
        600: '#757578',
        500: '#949497',
        400: '#b4b4b7',
        300: '#d8d8db',
        200: '#e8e8eb',
        100: '#f1f1f4',
        50: '#f8f8fb',
      },
      forest: {
        1200: '#032213',
        1100: '#08351f',
        1000: '#0c472a',
        900: '#115a36',
        800: '#197a4b',
        700: '#1d8b56',
        600: '#259d63',
        500: '#2cac6e',
        400: '#51b883',
        300: '#71c598',
        200: '#9bd4b5',
        100: '#c2e5d1',
        50: '#e6f5ec',
      },
      wood: {
        1200: '#662e00',
        1100: '#833b00',
        1000: '#9c4600',
        900: '#b65200',
        800: '#c16800',
        700: '#c87504',
        600: '#cd820a',
        500: '#d18d0f',
        400: '#d69c2b',
        300: '#dcac4d',
        200: '#e1c383',
        100: '#e7d8b9',
        50: '#f3eee5',
      },
      sun: {
        1200: '#640101',
        1100: '#890101',
        1000: '#af0000',
        900: '#d50000',
        800: '#ec0000',
        700: '#fa1606',
        600: '#ff220d',
        500: '#ff4b36',
        400: '#ff5838',
        300: '#ff7b5c',
        200: '#ffa28b',
        100: '#ffc8b8',
        50: '#ffe7e6',
      },
    },
    lineHeight: {
      sm: '1.4',
      md: '1.5',
      lg: '1.7',
    },
    letterSpacing: {
      sm: '0.02em',
      md: '0.04em',
    },
    borderRadius: {
      DEFAULT: '4px',
      none: '0',
      sm: '8px',
      md: '12px',
      lg: '16px',
      full: '9999px',
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          letterSpacing: theme('letterSpacing.md'),
          // paragraphs
          p: {
            marginBottom: theme('spacing.2'),
            fontSize: '1rem',
            lineHeight: theme('lineHeight.lg'),
          },
          // headings
          h1: {
            marginTop: theme('spacing.16'),
            marginBottom: theme('spacing.6'),
            fontSize: theme('fontSize.3xl'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.md'),
            [`@media (min-width: ${theme('screens.md')})`]: {
              fontSize: theme('fontSize.4xl'),
              fontWeight: theme('fontWeight.regular'),
              lineHeight: theme('lineHeight.sm'),
            },
          },
          h2: {
            marginTop: theme('spacing.16'),
            marginBottom: theme('spacing.6'),
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.md'),
            [`@media (min-width: ${theme('screens.md')})`]: {
              fontSize: theme('fontSize.3xl'),
              fontWeight: theme('fontWeight.regular'),
            },
          },
          h3: {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.6'),
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.md'),
            [`@media (min-width: ${theme('screens.md')})`]: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.regular'),
            },
          },
          h4: {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.4'),
            fontSize: theme('fontSize.lg'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.md'),
            [`@media (min-width: ${theme('screens.md')})`]: {
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.regular'),
            },
          },
          h5: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.4'),
            fontSize: theme('fontSize.md'),
            fontWeight: theme('fontWeight.medium'),
            lineHeight: theme('lineHeight.lg'),
            [`@media (min-width: ${theme('screens.md')})`]: {
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.regular'),
              lineHeight: theme('lineHeight.md'),
            },
          },
          // decorations
          b: {
            fontWeight: theme('fontWeight.bold'),
          },
          a: {
            color: theme('colors.sea.800'),
            textDecoration: 'underline',
            '&:hover, &:active, &:visited': {
              color: theme('colors.sea.900'),
            },
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
    }),
    extend: {},
  },
  plugins: [typography, addDynamicIconSelectors()],
};

export default config;
