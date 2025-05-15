import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

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
            exclude: ["**/__tests__", "**/*.stories.*"]
        }),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            extensions: ['.js'],
            exclude: 'node_modules/**',
        }),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
    ],
    external: ['react', 'react-dom', 'prop-types']
}