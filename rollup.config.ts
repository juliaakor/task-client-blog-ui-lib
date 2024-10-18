import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const external = ['react', 'react-dom', 'next', 'next/image'];

const createPlugins = (declarationDir: string) => [
  peerDepsExternal(),
  nodeResolve(),
  commonjs(),
  eslint({
    exclude: 'node_modules/**',
  }),
  typescript({
    declaration: true,
    declarationDir,
    tsconfig: './tsconfig.json',
  }),
  babel({
    babelHelpers: 'runtime',
    configFile: './.babelrc',
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  postcss({
    extensions: ['.css'],
    extract: false,
    inject: true,
  }),
  svgr(),
  url({
    include: ['**/*.svg'],
    limit: 0,
  }),
  preserveDirectives(),
  terser(),
];

export default [
  {
    external,
    input: './src/index.ts',
    output: [
      {
        dir: 'build/esm',
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: createPlugins('build/esm/types'),
  },
  {
    external,
    input: './src/index.ts',
    output: [
      {
        dir: 'build/cjs',
        format: 'cjs',
        sourcemap: false,
      },
    ],
    plugins: createPlugins('build/cjs/types'),
  },
  {
    external: [/\.css$/],
    input: 'build/esm/types/src/index.d.ts',
    output: [
      {
        file: 'build/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
  },
] as RollupOptions;
