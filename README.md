# ![](http://i.ncrp.co/0X1n0809020V/date-fns-mini-logo.svg) date-fns
[![Build Status](https://travis-ci.org/date-fns/date-fns.svg?branch=master)](https://travis-ci.org/date-fns/date-fns) [![Docs Status](http://inch-ci.org/github/date-fns/date-fns.svg?branch=master)](http://inch-ci.org/github/date-fns/date-fns) [![Licensed under the MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](#license) [![Sponsored by Toptal](http://i.ncrp.co/19142t0u3U2A/Toptal's%20open%20source%20badge.svg)](http://i.ncrp.co/eC2e)

date-fns provides the most comprehensive yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

The library has **140+ functions** for all occasions. If you like, you can
think of date-fns as **[lodash](https://lodash.com) for dates**.

```js
dateFns.format(new Date(2014, 1, 11), 'MM/DD/YYYY')
//=> '02/11/2014'

var dates = [new Date(1995, 6, 2), new Date(1987, 1, 11), new Date(1989, 6, 10)]
dates.sort(dateFns.compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

date-fns is **battle tested** in several core [Toptal](http://i.ncrp.co/eC2e)
projects, so **it's safe to use it in a production**.

## Resources

**If you are already familiar with the project**, you might be interesting
in following resources:

- See [**API Documentation**](https://date-fns.org/docs) for full list of
  functions, detailed documentation and examples.
- See the [Changelog](./CHANGELOG.md) for a list of changes.
- Read [Contributor Guide](./CONTRIBUTING.md) if you want to help the project.
- Visit [date-fns kanban board](https://waffle.io/date-fns/date-fns) or
  [GitHub Issues](https://github.com/date-fns/date-fns) to see roadmap, list of
  know issues or if you want to get help or report a bug.
- Follow [@date_fns](https://twitter.com/date_fns) at Twitter
  for the project updates.

**If you are new to the project, still not convinced** or just looking for
more information, you might benefit from reading of the following document
as it describes in details **why** and **how** to use date-fns, lists project
alternatives, provides list of useful resources and
reveals awesome people behind the project.

## Table of Contents

* [Why to Use date-fns?](#why-to-use-date-fns)
  - [Key Features](#key-features)
  - [Testimonials](#testimonials)
  - [Moment.js Compatibility](#momentjs-compatibility)
* [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Main Principles](#main-principles)
  - [API](#api)
* [FAQ](#faq)
  - [I18n Support](#i18n-support)
  - [Working with Time Zones](#working-with-time-zones)
* [Additional Resources](#additional-resources)
  - [Alternatives](#alternatives)
  - [Related Information](#related-information)
* [People Behind the Project](#people-behind-the-project)
  - [Core Team & Contributors](#core-team--contributors)
  - [Sponsors](#sponsors)
* [License](#license)

## Why to Use date-fns?

### Key Features

Why to choose date-fns over [awesome alternatives](#limitataions--alternatives)?

* **It's modular and built with webpack & Browserify in the mind**.
  It allows to get rid of unused funtionality and minimize the final build size.
  However it's **avaliable as UMD** so it might be used in every setup.
* **It's encourages functional approach**:
  - It doesn't mutate passed arguments.
  - API 100% consist of functions.
  - Functions are _reasonable_ **pure**: the result is always the same for
    the same arguments, but it also depends on the current moment of time
    and the local timezone.
* **It doesn't extend `Date` and `Date.prototype`**, so it's bulletproof.
* **It's lightweight and simple**. Unlike the library rivals, it doesn't add
  new classes and uses native `Date` objects, so it's easy to serialize and
  resulting code is obvious to new team members.
* **It has minimal overhead** that exists only to normalize host platform
  behavior and fix cross-platform implementation inconsistencies.
* Due to that, in most cases, date-fns is significantly
  **faster than alternatives**.
* **It respects DST** (daily saving time) and **fixes all
  the know platform-specific problems** caused by implementation incosistencies.
* To make sure that it's bug-free we wrote **comprehensive test suite** that
  tests library against all the possible time zones and all the common browsers.
  Total number of tests in the master build is 300 000 tests (yes, 300K)
  so you might be sure that your code runs smoothly even in Antarctica.

### Testimonials

TODO

### Moment.js Compatibility

date-fns is built as a modern replacement for [Moment.js](http://momentjs.com),
and mostly compatible with the latter (`format` function syntax,
funtionaly-wise, etc).

But there is a chance that you might prefer Moment.js. Also, there are few more
options, like [Sugar.js' Date extensions](http://sugarjs.com/api/Date)
or good old [Datejs](https://github.com/datejs/Datejs).

## Getting Started

date-fns is already installed? Skip to [Usage section](#usage).

### Installation

Avaliable installation methods:

- [npm](#npm)
- [Bower](#bower)
- [UMD](#umd) (download the library as a single `.js` file)
- [CDN](#cdn)

#### npm
[![npm version](https://img.shields.io/npm/v/date-fns.svg)](https://www.npmjs.org/package/date-fns) ![npm stats](https://img.shields.io/npm/dt/date-fns.svg)

Install date-fns and optionally save it as a dependency
to a project `package.json`:

```sh
npm install date-fns --save
```

See how to use npm package.


#### Bower
[![Bower version](https://img.shields.io/bower/v/date-fns.svg)]()

Install Bower package:

```sh
bower install date-fns
```

Include it to a HTML template:

```html
<script src="/assets/date_fns.js"></script>
```

TODO

#### UMD

[Download latest release from GitHub](https://github.com/date-fns/date-fns/releases/latest),
save it to a project and include to a HTML template:

```html
<script src="/assets/date_fns.js"></script>
```

TODO

#### CDN

date-fns is also avaliable through CDN sponsored by Toptal:

```html
<script src="http://cdn.date-fns.org/v1.0.0/date_fns.min.js"></script>
```

TODO

### Usage

#### Use npm Package

The npm package is optimized for webpack, Browserify, etc, so could be used
for web projects.

Then require a single function:

```js
var isLastDayOfMonth = require('date-fns/is_last_day_of_month')
var date = new Date(2014, 1, 28)
console.log(isLastDayOfMonth(date))
//=> true
```

It also possible to require whole library. However if your module bundler
doesn't support [tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html)
it's not recommended to use the approach in web projects.

```js
var dateFns = require('date-fns')
var date = new Date(2014, 1, 28)
console.log(dateFns.isLastDayOfMonth(date))
//=> true
```

#### Use date-fns as a Global Object (UMD)

After that the whole library will be avaliable global object `window.dateFns`:

```js
var date = new Date(2014, 1, 28)
console.log(dateFns.isLastDayOfMonth(date))
//=> true
```

#

``` javascript
var isLastDayOfMonth = require('date-fns/is_last_day_of_month')
var date = new Date(2014, 1, 28)
console.log(isLastDayOfMonth(date))
//=> true
```

### Main Principles

In order to provide smooth user experience and to prevent bugs
caused by confusion, date-fns strictly follows main principles:

1. Each function accepts a date object, an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
  string (full or partial) or a number representing the timestamp.
2. All the functions, always return a new date object instead of mutatating
  passed onces.
3. All the returned dates are normalized to represent datetime in the
  local enviorment time zone (usually it's OS' time zone), no matter that
  you pass as arguments.
4. If passed arguments don't makes sense and it possible to
  detect it (e.g. when first date of range is greater than second one)
  a function will throw an exception.

### API

See [online documentation](https://date-fns.org/docs).

- Online docs
- date-fns uses JSDoc format for documentation that
Code is fully documented, check the source for the reference.

## FAQ

### I18n Support

See "What About I18n?" for more information about date-fns' I18n support.

date-fns doesn't support historical DST changes and uses native browser API
to detect UTC offset. Also it can't parse [IANA](https://www.iana.org/time-zones)
time zone identifiers. If you are interested in advanced time zone
support, checkout [Moment Timezone](http://momentjs.com/timezone/) or
[vote for a future request](https://github.com/date-fns/date-fns/issues/180).

Unlike most popular date libraries, date-fns doesn't support I18n and
uses English as the only language. However this is matter only
of two functions `parse` and `format`.

------- CONSIDER TO MERGE

I18n support is already here since most of major browsers (except Safari)
support Intl API. Also, there is great battle-tested polyfill:
[Intl.js](https://github.com/andyearnshaw/Intl.js/) so it's recommened to use it.

You also might want to take a look at Yahoo's high-level Intl wrapper:
[Format.js](http://formatjs.io/).

Read more about Intl API:

- [ECMA-402, ECMAScript Internationalization API Specification](http://ecma-international.org/publications/standards/Ecma-402.htm)
- [An introduction to Intl](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- [Intl at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

### Working with Time Zones

TODO

## Additional Resources

### Alternatives

date-fns is great and has functionality of all following libraries combined,
however it's always good to have options:

* [Moment.js](http://momentjs.com/) is the main date-fns alternative.
  See [Moment.js Compatibility] for information about libraries compatibility
  and reasoning behind _yet another date library_. You might want to use it
  if you prefer object-oriented approach and don't care about build size.
  An another reason to use the latter is built-in I18n support (see [I18n Support](#i18n-support)
  for more info on the topic) and advanced time zone extension,
  [Moment Timezone](http://momentjs.com/timezone/).
* [Sugar.js' Date extensions](http://sugarjs.com/dates/) is another option.
  It extends base classes, adds bunch of useful methods and like Moment.js
  has locales support.
* [Datejs](https://github.com/datejs/Datejs) - good old date library that
  extends `Date` object. It was abandoned in 2007, however steps are being taken
  to revive the project.
* [DateJS: Evolved](https://github.com/abritinthebay/datejs) - another attempt
  to reanimate Datejs.

### Related Information

Read more about Date, ECMAScript Internationalization API and related standarts:

* [Date at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Intl at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
* [JavaScript Date Type is Horribly Broken](http://codeofmatt.com/2013/06/07/javascript-date-type-is-horribly-broken/)
* [JavaScript Date Parsing Changes in ES6](http://codeofmatt.com/2015/06/17/javascript-date-parsing-changes-in-es6/)
* [IANA's Time Zone Database](https://www.iana.org/time-zones)
* [List of tz database time zones)(https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
* [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
* [List of UTC time offsets](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets)
* [Standart ECMA-402](http://ecma-international.org/publications/standards/Ecma-402.htm)
  (ECMAScript Internationalization API specification)

## People Behind the Project

### Core Team & Contributors

- [Sasha Koss](mailto:koss@nocorp.me) - the project lead and the architect,
  a team lead & a lead front-end engineer at [Toptal](http://i.ncrp.co/eC2e)
  core team.
- [Lesha Koss](https://github.com/LeshaKoss) - talented intern
  ([avaliable to hire!](mailto:regiusprod@gmail.com)).

[See full list of contributors](https://github.com/date-fns/date-fns/graphs/contributors).

### Sponsors

The main project sponsor is [Toptal](http://i.ncrp.co/eC2e).
Thank for the team for media sponsorship, code reviews and broad support.

Cross-browser test suite is running on [Sauce Labs](https://saucelabs.com),
kudos to the company for [support of open source movement](https://saucelabs.com/opensauce/).

Also, I want thank [BrowserStack](https://www.browserstack.com) for
support on early stages of development.

## License

date-fns is licensed under the [MIT license](http://kossnocorp.mit-license.org).
