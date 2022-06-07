import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/client/app.js',
    output: {
        name: 'App',
        file: 'dist/app.min.js',
        format: 'iife',
    },
    plugins: [
        resolve(),
        commonjs({
            transformMixedEsModules: true,
        }),
        terser(),
        // production && terser(),
    ]
};