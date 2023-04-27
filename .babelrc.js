const presets = [
  [
    '@babel/preset-env',
    { modules: process.env.BABEL_ENV === 'esm' ? false : 'auto' },
  ],
  '@babel/preset-typescript',
]
const plugins = ['@babel/plugin-proposal-class-properties']

const transformRuntimeOptions = {
  version: require('./package.json').dependencies['@babel/runtime'].replace(
    /^\^/,
    ''
  ),
}

if (process.env.BABEL_ENV !== 'esm') {
  plugins.push('babel-plugin-add-module-exports')
  plugins.push(['@babel/plugin-transform-runtime', transformRuntimeOptions])
} else {
  plugins.push([
    '@babel/plugin-transform-runtime',
    { ...transformRuntimeOptions, useESModules: true },
  ])
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
