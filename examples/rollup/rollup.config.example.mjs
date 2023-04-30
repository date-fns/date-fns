import { nodeResolve } from '@rollup/plugin-node-resolve' // use the new @rollup/plugin-node-resolve package
import commonjs from '@rollup/plugin-commonjs' // use the new @rollup/plugin-commonjs package

export default {
  input: 'example.js',
  output: {
    file: 'dist/example.js',
    format: 'cjs',
  },
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs()],
}
