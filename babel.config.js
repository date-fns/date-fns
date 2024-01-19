module.exports = {
  presets: ['@babel/preset-typescript'],

  env: {
    cjs: {
      presets: [
        [
          '@babel/preset-env',
          { targets: { node: 'current' }, modules: 'commonjs' },
        ],
      ],

      plugins: [
        ['@babel/plugin-transform-modules-commonjs', { strict: true }],
        ['babel-plugin-add-import-extension', { extension: 'js' }],
      ],
    },

    esm: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
      ],

      plugins: [['babel-plugin-add-import-extension', { extension: 'mjs' }]],
    },
  },

  ignore: [],

  retainLines: true,
}
