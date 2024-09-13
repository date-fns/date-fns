import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import globals from "globals";
// import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/lib", "**/tmp", "**/examples"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    // languageOptions: {
    //   globals: {
    //     ...globals.browser,
    //     ...globals.node,
    //   },

    //   parser: tsParser,
    //   ecmaVersion: "latest",
    //   sourceType: "module",
    // },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-element-newline": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "block-spacing": "off",
      "brace-style": "off",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "dot-location": "off",
      "eol-last": "off",
      "func-call-spacing": "off",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star-spacing": "off",
      "implicit-arrow-linebreak": "off",
      indent: "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-between-class-members": "off",
      "lines-around-comment": "off",
      "max-len": "off",
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-confusing-arrow": "off",
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-floating-decimal": "off",
      "no-mixed-operators": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-spaces": "off",
      "no-multiple-empty-lines": "off",
      "no-tabs": "off",
      "no-trailing-spaces": "off",
      "no-whitespace-before-property": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
      "one-var-declaration-per-line": "off",
      "operator-linebreak": "off",
      "padded-blocks": "off",
      "padding-line-between-statements": "off",
      "quote-props": "off",
      quotes: "off",
      "rest-spread-spacing": "off",
      semi: "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-unary-ops": "off",
      "spaced-comment": "off",
      "switch-colon-spacing": "off",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
    },
  },
  //   {
  //     files: ["**/.eslintrc.{js,cjs}"],

  //     languageOptions: {
  //       globals: {
  //         ...globals.node,
  //       },

  //       ecmaVersion: 5,
  //       sourceType: "commonjs",
  //     },
  //   },
];
