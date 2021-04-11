let modules = 'auto'

if (process.env.BABEL_ENV === 'commonjs') {
  modules = 'cjs'
}

if (process.env.BABEL_ENV === 'esm') {
  modules = 'false'
}

const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, ie >= 11, not dead',
      modules: modules,
    },
  ],
]
const plugins = []

if (process.env.NODE_ENV === 'test') {
  presets.push('babel-preset-power-assert')
}

const overrides = [{ ignore: ['**/*.d.ts'] }]

module.exports = {
  presets,
  plugins,
  overrides,
}
