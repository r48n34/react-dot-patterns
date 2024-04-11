import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
// import { swc } from 'rollup-plugin-swc3';

import pkg from './package.json' assert {type: 'json'}

export default {
    input: 'src/index.ts', 
    treeshake: true,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: false,
        strict: false
      },
      {
        file: pkg.module, 
        format: 'es', 
        sourcemap: false,
      },
    ],
    plugins: [
        filesize(),
        typescript({ 
            tsconfig: './tsconfig.json',
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env','@babel/preset-react'],
            extensions: ['.js'],
            exclude: 'node_modules/**',
        }),
        resolve({ 
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        // swc({
        //     // All options are optional
        //     include: /\.[mc]?[jt]sx?$/, // default
        //     exclude: /node_modules/, // default
        //     tsconfig: 'tsconfig.json', // default
        //     jsc: {}
        // }),
    ],
    external: ['react', 'react-dom']
  }