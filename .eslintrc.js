module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
  },
}
