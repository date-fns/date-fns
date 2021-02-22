module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: ['eslint:recommended', 'prettier'],

  ignorePatterns: ['.github', 'node_modules', 'tmp/', 'examples/', 'dist/'],

  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // @typescript-eslint/eslint-plugin
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
            },
            singleline: {
              delimiter: 'semi',
            },
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-params': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-interface': 'off',
      },
    },
  ],

  root: true,
}
