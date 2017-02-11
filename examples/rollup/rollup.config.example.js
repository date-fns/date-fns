import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'example.js',
  dest: 'dist/example.js',
  format: 'cjs',
  plugins: [
    resolve({jsnext: true, main: true}),
    commonjs()
  ]
}
