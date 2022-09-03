const presets = ['@babel/preset-env', '@babel/preset-typescript']
const plugins = ['@babel/plugin-proposal-class-properties']

if (process.env.BABEL_ENV !== 'esm') {
  plugins.push('@babel/plugin-transform-modules-commonjs')
  plugins.push('babel-plugin-add-module-exports')
}

if (process.env.BABEL_ENV === 'esm' || process.env.BABEL_ENV === 'commonjs') {
  plugins.push(['babel-plugin-add-import-extension', { extension: 'js' }])
}

const overrides = [{ ignore: ['**/*.d.ts'] }]

module.exports = {
  presets,
  plugins,
  overrides,
}
