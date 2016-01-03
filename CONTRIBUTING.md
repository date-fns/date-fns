# Contributor Guide

To manage the process, team uses Waffle.io as a kanban board on the top
of GitHub issues.

- [date-fns kanban board](https://waffle.io/date-fns/date-fns).
- [date-fns' website karban board]

## Table of Contents

* [How to Help?](#how-to-help)
* [Contribution Guidelines](#contribution-guidelines)
* [Getting Started](#getting-started)
* [Documentation](#documentation)
* [Additional Information](#additional-information)
  - [The Project Process](#the-project-process)
  - [Travis CI Setup](#travis-ci-setup)
  - [Generate the Project Stats](#generate-the-project-stats)

## How to Help?

Help is always welcome. There are few areas where you can help:

- The core functionality (performance improvements, bug fixes, new features etc).
- Documentation ([markdown documents](https://github.com/date-fns/date-fns/search?l=markdown&q=&utf8=%E2%9C%93),
  inline JSDoc comments).
- Test suite & development environment improvements.
- [Website](https://github.com/date-fns/date-fns.org/blob/master/CONTRIBUTING.md).

If you see the gap but don't have time, expirience,
or you need a help with the library, don't hestitate to
[shoot an issue](https://github.com/date-fns/date-fns/issues/new).

The date-fns functionality is comprehensive and covers most of the use cases,
however it doesn't support I18n which is focus for the next major release.
If you want to help with that, please left a comment to
the [I18n support issue](https://github.com/date-fns/date-fns/issues/157).

Another major milestone for date-fns project is an extended time zone support.
Please left a comment to the [Extended time zones support issue](https://github.com/date-fns/date-fns/issues/180)
if you are interested in the functionality or want to help with development.

If you are interested in ClojureScript/TypeScript/etc wrappers,
please [file an issue](https://github.com/date-fns/date-fns/issues/new).

## Contribution Guidelines

Due to modular nature of date-fns, it's more than open to new features.
However, when a new function dublicates the existing functionality, native API
or causes significant build size increase, PR might be rejected or
the author could be asked to move the code to a new or another module.

Please follow the main contributing rules, to maintain date-fns' top quality:

1. **Follow style guides**:
  - [Lint the Code](#lint-the-code)
  - [Use EditorConfig](#use-editorconfig)
2. **Write tests**. See [Test Suite section](#test-suite) for more information
  about the setup.
3. **Write documentation**. For more details, see [Documentation](#documentation).
4. **Write good commit messages**.
  See Tim Pope's [A Note About Git Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
  for general recommendations.
5. **Squash related commits** before the PR merge.
6. **Don't change the library version**.

## Getting Started

1. [Install Node.js](https://nodejs.org/en/download).
2. Fork the project and clone the fork repo.
3. Run `npm install` to install the application dependecies.
4.

## Code Style Guide

### Lint the Code

To run lint the code, run: `npm run lint`. For convenience date-fns provides.
- [ESLint](http://eslint.org) & [Toptal's ESLint config](https://github.com/toptal/eslint-config-toptal).
  See .
- [EditorConfig](http://editorconfig.org). See [EditorConfig](#editorconfig).

### Use EditorConfig

TODO

## Test Suite

To run tests locally, use:

```sh
npm run
```

It will start tests in the watch mode. To run tests just once, use:

```sh
npm run test-ci
```

To run tests in IE8+ & major browsers ([see full list](https://github.com/date-fns/date-fns/blob/master/config/karma.js#L3-L78))
you'll need to set `SAUCE_USERNAME` & `SAUCE_ACCESS_KEY` env variables:

```sh
env SAUCE_USERNAME=ABC SAUCE_ACCESS_KEY=123 npm run test-cross-browser
```

> Kudos to [SauceLabs](https://saucelabs.com/) for the provided
> Automate API. Thereby we run cross-browser tests on every push!

All the tests for `test-ci` and `test` scripts use local timezone.
To run tests in `UTC-12:00`-`UTC+14:00` range, use:

```sh
npm run test-tz
```

To run tests in `Africa/Abidjan`-`Pacific/Wallis` range ([see full list](https://github.com/date-fns/date-fns/blob/master/scripts/test_tz_extended.sh#L6-L342)),
use:

```sh
npm run test-tz-extended
```

## Documentation

[JSDoc](http://usejsdoc.org) is used for
  the code documentation.
  Also, date-fns uses [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse)
  to generate the documentation JSON used by [date-fns website](https://date-fns.org/docs).

### Deployment

```sh
npm run release -- 1.0.0-rc1
```

## Additional Information

### The Project Process

### Travis CI Setup

date-fns uses [Travis CI](https://travis-ci.org/):

* On GitHub pull request push, Travis CI runs npm commands:
  - `lint`
  - `test-ci`
  - `test-cross-browser`
  - `test-tz`
  - `test-tz-extended`
* When `master` branch is pushed, Travis CI also runs
  `test-tz-extended`, which run tests suite against
  the complete list of time zones:
    - [UTC time offsets](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets)
    - [IANA](https://www.iana.org/time-zones) time zone identifiers
* When git tag is pushed to the `master` branch, Travis CI deploys
  the library to:
  - S3 & [CDN](http://cdn.date-fns.org)
  - [GitHub releases](https://github.com/date-fns/date-fns/releases)
  - Also, it triggers [date-fns.org](https://github.com/date-fns/date-fns.org)
    deployment.
  - At the end, Travis CI posts release tweet to
    [@date_fns](https://twitter.com/date_fns).

### Generate the Project Stats

date-fns uses [gzip-size](https://www.npmjs.com/package/gzip-size),
[pretty-bytes](https://www.npmjs.com/package/pretty-bytes) and [cloc](https://www.npmjs.com/package/cloc)
to generate the project stats.

To see the actual result, run:

```sh
npm run stats
```

It will print the size of UMD build, LOC stats for the source code the test
suite.
