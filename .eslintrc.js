module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    'prefer-rest-params': 'off',
  },
}
