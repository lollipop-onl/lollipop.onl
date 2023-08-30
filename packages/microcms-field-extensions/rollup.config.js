import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [postcss(), typescript()],
});
