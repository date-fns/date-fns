module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // silences Babel config errors in `/examples`
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  root: true,
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'error',
    'prettier/prettier': 'warn',
  },

  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        // project: 'tsconfig.json',
      },
      rules: {
        // no unused vars
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],

        // no redeclare
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        // no require()
        '@typescript-eslint/no-var-requires': 'error',

        // for-of when possible
        '@typescript-eslint/prefer-for-of': 'error',

        // use `import type` when possible
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],

        // explicit return types with exports
        '@typescript-eslint/explicit-module-boundary-types': 'error',

        // no dupe imports (can't use because of typings.d.ts)
        // 'no-duplicate-imports': 'off',
        // '@typescript-eslint/no-duplicate-imports': 'error',

        // no var, only let or const
        'no-var': 'error',

        // use rest instead of arguments. (OFF because of `requiredArgs(arguments) pattern`)
        'prefer-rest-params': 'off',

        // prefer `===` over `==`
        eqeqeq: 'warn',

        // don't use console
        'no-console': 'error',

        // some locales might need to disable this for a few line only
        'no-misleading-character-class': 'error',

        'no-implied-eval': 'error',

        // prefer T[] over Array<T> - could help standardize code base?
        // '@typescript-eslint/array-type': ['error', { default: 'array' }],

        // prefer `Record<string, string>` over `{[key:string]:string}` - could help standardize code base?
        // '@typescript-eslint/consistent-indexed-object-style': [
        //   'error',
        //   'record',
        // ],

        // prefer interface over type - could help standardize code base?
        // '@typescript-eslint/consistent-type-definitions': [
        //   'error',
        //   'interface',
        // ],

        // enforce relative imports by detecting imports from `src/*` and `scripts/*`
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['src/*', 'scripts/*'],
                message: 'Please use relative imports instead.',
              },
            ],
          },
        ],

        'prettier/prettier': 'warn',
      },
    },
  ],
}
