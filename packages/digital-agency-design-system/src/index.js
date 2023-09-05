import plugin from 'tailwindcss/plugin';
import colors from './colors';
import typography from './typography';

/** @type {import('tailwindcss/types/config').PluginCreator} */
const main = () => {};

export default plugin(main, {
  theme: {
    screens: {
      md: '768px',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      '4xl': '2.25rem',
      '3xl': '2rem',
      '2xl': '1.75rem',
      xl: '1.5rem',
      lg: '1.25rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem',
      '2xs': '0.625rem',
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
    colors: {
      ...colors,
    },
    typography,
  },
});
