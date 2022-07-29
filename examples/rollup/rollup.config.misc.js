import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'misc.js',
  output: {
    file: 'dist/misc.js',
    format: 'cjs',
  },
  plugins: [resolve({ jsnext: true, main: true }), commonjs()],
}
