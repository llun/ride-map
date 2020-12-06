// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: 'app/index.tsx',
  output: {
    dir: 'js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    replace({
      ['process.env.NODE_ENV']: JSON.stringify(process.env.NODE_ENV),
      ['process.env.MAPBOX_ACCESS_TOKEN']: JSON.stringify(
        process.env.MAPBOX_ACCESS_TOKEN
      ),
    }),
  ],
};
