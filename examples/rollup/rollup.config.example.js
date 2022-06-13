import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'example.js',
  output: {
    file: 'dist/example.js',
    format: 'cjs',
  },
  plugins: [resolve({ jsnext: true, main: true }), commonjs()],
}
