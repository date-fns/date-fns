# Contributing Guide

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
  [TSDoc annotations in source code](https://github.com/date-fns/date-fns/blob/master/src/toDate/index.ts)).

- Test suite & development environment improvements.

- The [website](https://github.com/date-fns/date-fns.org).

If you see a gap, but don't have time, experience, or you just need help
with the library, don't hesitate to [start a discussion](https://github.com/date-fns/date-fns/discussions/new) or
[open a new issue](https://github.com/date-fns/date-fns/issues/new).

## Contribution Guidelines

Due to the modular nature of date-fns, it's more than open to new features.
However, when a new function duplicates the existing functionality, native API
or causes a significant build size increase, a PR might be rejected, or
the author can be asked to move the code to a new or another package.

Please follow the main contributing rules, to maintain date-fns' top quality:

- Follow style guides:
  - [Lint the code](#lint-the-code).

- Write tests.

- [Write documentation](#documentation).

- Don't update the changelog.

- Don't change the library version.

## Getting Started

1. Install [Node.js 22 or greater (LTS recommended)](https://nodejs.org/en/download/)

2. Fork the project, and clone your fork of the repo

3. Run `pnpm install` to install the dependencies

## Testing

### Unit tests

Node.js:

```sh
pnpm vitest run

# Or in the watch mode:
pnpm vitest watch
```

Browser

```sh
pnpm vitest run --browser

# Or in the watch mode:
pnpm vitest watch --browser
```

### REPL

To test functions in a REPL, use `tsx`:

```sh
pnpm tsx
```

...and then require individual functions:

```sh
> const toDate = require('./src/toDate').default
undefined
> toDate(1392098430000).toString()
'Tue Feb 11 2014 14:00:30 GMT+0800 (Singapore Standard Time)'
>
```

### Test build

To test the build, run:

```sh
./scripts/build/package.sh
cd lib
npm link

cd YOUR_PROJECT
npm link date-fns
```

[Read more about `npm link`](https://docs.npmjs.com/cli/commands/npm-link).

## Code Style Guide

### Lint the Code

The project follows [Prettier] code style and uses [ESLint] as the linter.
To lint the code, run:

```bash
pnpm run lint
```

[prettier]: https://prettier.io/
[eslint]: https://eslint.org/

## Documentation

### JSDoc

- [TSDoc](https://tsdoc.org/) is used for the code documentation.

- [TypeDoc](https://typedoc.org/) is used to parse the TSDoc annotations and populate the database.
