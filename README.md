# date-fns
[![Build Status](https://travis-ci.org/date-fns/date-fns.svg?branch=master)](https://travis-ci.org/date-fns/date-fns) [![Docs Status](http://inch-ci.org/github/date-fns/date-fns.svg?branch=master)](http://inch-ci.org/github/date-fns/date-fns/branch/master)

Date helpers in the function-per-file style.

## Installation

### npm

```
npm install date-fns --save
```

### Bower

```
bower install date-fns
```

## Usage

``` javascript
var isLastDayOfMonth = require('date-fns/is_last_day_of_month')
var date = new Date(2014, 1, 28)
console.log(isLastDayOfMonth(date))
//=> true
```

## API

See [online documentation](https://date-fns.org/docs).

- Online docs
- date-fns uses JSDoc format for documentation that
Code is fully documented, check the source for the reference.


### I18n

I18n is planned for [v1.1.0](https://github.com/date-fns/date-fns/milestones/v1.1.0).

## Tests

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

### Travis CI Setup

* On GitHub pull request push, Travis CI runs:
  - `lint`
  - `test-ci`
  - `test-cross-browser`
  - `test-tz`
  - `test-tz-extended`
* When `master` branch is pushed, Travis CI also runs 
  `test-tz-extended`, which run tests suite against
  complete list of time zones.

## Sponsors

I want thank [BrowserStack](https://www.browserstack.com/) for
support on early stages of development.
