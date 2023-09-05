import Color from 'color';

export const colors = {
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
};

export const semanticColors = {
  // Text Light
  '.text-body': { color: colors.sumi[900] },
  '.text-description': { color: colors.sumi[700] },
  '.text-placeholder': { color: colors.sumi[600] },
  '.text-on-fill': { color: colors.white },
  '.text-link': { color: colors.sea[800] },
  '.text-hover': { color: colors.sea[900] },
  '.text-active': { color: colors.sea[900] },
  '.text-visited': { color: colors.sea[900] },
  '.text-alert': { color: colors.sun[800] },
  '.text-disabled': { color: colors.sumi[500] },
  // Icon Light
  '.icon-label': { color: colors.sumi[900] },
  '.icon-active': { color: colors.sea[800] },
  '.icon-alert': { color: colors.sun[800] },
  '.icon-disabled': { color: colors.sumi[500] },
  // Button Light
  '.button-normal': { backgroundColor: colors.sea[800] },
  '.button-hover': {
    backgroundColor: Color(colors.sea[800]).darken(0.13).toString(),
  },
  '.button-active': {
    backgroundColor: Color(colors.sea[800]).darken(0.13).toString(),
  },
  '.button-disabled': { backgroundColor: colors.sumi[500] },
  // Background Light
  '.bg-primary': { backgroundColor: colors.white },
  '.bg-secondary': { backgroundColor: colors.sumi[100] },
  '.bg-tertiary': { backgroundColor: colors.sumi[50] },
  // Border Light
  '.border-field': { borderColor: colors.sumi[900] },
  '.border-divider': { borderColor: colors.sumi[300] },
  '.border-focused': { borderColor: colors.wood[600] },
  '.border-selected': { borderColor: colors.sea[800] },
  '.border-alert': { borderColor: colors.sun[800] },
  '.border-disabled': { borderColor: colors.sumi[300] },
};