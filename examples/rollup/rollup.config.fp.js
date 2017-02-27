import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'fp.js',
  dest: 'dist/fp.js',
  format: 'cjs',
  plugins: [
    resolve({jsnext: true, main: true}),
    commonjs()
  ]
}
