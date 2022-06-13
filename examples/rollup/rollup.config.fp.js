import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'fp.js',
  output: {
    file: 'dist/fp.js',
    format: 'cjs',
  },
  plugins: [resolve({ jsnext: true, main: true }), commonjs()],
}
