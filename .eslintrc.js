module.exports = {
  extends: ['eslint:recommended', 'prettier'],

  ignorePatterns: ['node_modules', '/tmp', '/examples', '/dist'],

  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  root: true,

  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
