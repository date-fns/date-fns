# Contributing Guide

**⚠⚠⚠ Please contribute new code in TypeScript ⚠⚠⚠**

[Read more about migration to TypeScript](https://github.com/date-fns/date-fns/discussions/1932)

## Table of Contents

- [How to Help?](#how-to-help)

- [Contribution Guidelines](#contribution-guidelines)

- [Getting Started](#getting-started)

- [Testing](#testing)

  - [Unit tests](#unit-tests)  
  - [REPL](#repl)
  - [Test build](#test-build)


- [Code Style Guide](#code-style-guide)

  - [Lint the Code](#lint-the-code)

- [Documentation](#documentation)

  - [JSDoc](#jsdoc)

## How to Help?

Help is always welcome. There are areas where you can help:

- The core functionality (performance improvements, bug fixes,
  new features, etc.).

- Documentation ([markdown documents](https://github.com/date-fns/date-fns/tree/master/docs),
  [JSDoc annotations in source code](https://github.com/date-fns/date-fns/blob/master/src/toDate/index.ts)).

- Test suite & development environment improvements.

- The [website](https://github.com/date-fns/date-fns.org).

If you see a gap, but don't have time, experience, or you just need help
with the library, don't hesitate to [start a discussion](https://github.com/date-fns/date-fns/discussions/new) or
[open a new issue](https://github.com/date-fns/date-fns/issues/new).

The date-fns functionality is comprehensive and covers most of the use cases,
however it doesn't have an extended time zone support. Please leave a comment
to the [Extended time zones support issue](https://github.com/date-fns/date-fns/issues/180)
if you are interested in the functionality or want to help with development.

If you are interested in Elm/ClojureScript/etc. wrappers,
please [file an issue](https://github.com/date-fns/date-fns/issues/new).

## Contribution Guidelines

Due to the modular nature of date-fns, it's more than open to new features.
However, when a new function duplicates the existing functionality, native API
or causes significant build size increase, a PR might be rejected or
the author can be asked to move the code to a new or another package.

Please follow the main contributing rules, to maintain date-fns' top quality:

- Follow style guides:

  - [Lint the code](#lint-the-code).

- Write tests.

- [Write documentation](#documentation).

- Don't update the changelog.

- Don't change the library version.

## Getting Started

1. Install [Node.js 14 or greater (LTS recommended)](https://nodejs.org/en/download/)

2. Install or upgrade to the latest [Yarn classic (v1)](https://classic.yarnpkg.com/en/docs/install) by running `npm install -g yarn@latest`

3. Fork the project, and clone your fork of the repo

4. Run `yarn` to install the dev dependencies

## Testing

### Unit tests

Karma + Mocha (Chrome):

```sh
# all tests in watch mode
yarn test

# all tests once
yarn test --single-run
```

Jest (Node.js):

```sh
# all tests in watch mode
yarn jest --watch

# all tests once
yarn jest
```

### REPL

To test functions in a REPL, use `babel-node` located in `./node_modules/.bin` (mind the `-x` flag to also support TypeScript files):

```sh
yarn babel-node -x .ts,.js
```

and then require invididual functions:
```sh
> const toDate = require('./src/toDate')
undefined
> toDate(1392098430000).toString()
'Tue Feb 11 2014 01:00:30 GMT-0500 (Eastern Standard Time)'
>
```

or all functions (slower):
```sh
> const fns = require('./src')
undefined
> fns.toDate(1392098430000).toString()
'Tue Feb 11 2014 01:00:30 GMT-0500 (Eastern Standard Time)'
>
```

### Test build

Build date-fns from source to test in your project. The ouput is equivalent to what gets published on npm with each release.

```sh
# replace {YOUR-PROJECT-PATH} with an absolute or relative path to your project root
env PACKAGE_OUTPUT_PATH="{YOUR-PROJECT-PATH}/node_modules/date-fns" ./scripts/build/package.sh
```

## Code Style Guide

### Lint the Code

The project follows [Prettier] code style and uses [ESLint] as the linter.
To lint the code, run:

```bash
yarn lint
```

[prettier]: https://prettier.io/
[eslint]: https://eslint.org/

## Documentation

### JSDoc

- [JSDoc](https://jsdoc.app/) is used for the code documentation. Along with the
standard JSDoc tags, date-fns uses `@category` tag that allows
to group functions.

- [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown/) is used to parse
JSDoc annotations.
