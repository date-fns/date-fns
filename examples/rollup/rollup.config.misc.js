import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'misc.js',
  dest: 'dist/misc.js',
  format: 'cjs',
  plugins: [
    resolve({jsnext: true, main: true}),
    commonjs()
  ]
}
