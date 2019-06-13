const presets = []
const plugins = ['@babel/plugin-transform-block-scoping']

if (process.env.NODE_ENV === 'test') {
  presets.push('babel-preset-power-assert')
}

if (process.env.TARGET !== 'esm') {
  plugins.push('@babel/plugin-transform-modules-commonjs')
  plugins.push('babel-plugin-add-module-exports')
}

module.exports = {
  presets,
  plugins
}
