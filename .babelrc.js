const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, ie >= 11, not dead',
      modules: process.env.BABEL_ENV === 'commonjs' ? 'cjs' : false,
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
