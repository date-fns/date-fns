# Getting Started

## Table of Contents

- [Introduction](#introduction)

- [Installation](#installation)

  - [npm or yarn](#npm)

  - [Bower](#bower)

  - [CDN & Download](#cdn)

  - [GitHub Releases](#github-releases)

## Introduction

**date-fns** provides the most comprehensive, yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

**date-fns** is like [lodash](https://lodash.com) for dates. It has
[**130+ functions** for all occasions](https://date-fns.org/docs/).

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

## Submodules

**date-fns** includes some optional features as submodules in the npm package.
Here is the list of them, in order of nesting:

- ESM — suitable for tree-shaking variations of the functions which provide default exports.
  See [ECMAScript Modules Guide](https://date-fns.org/docs/ECMAScript-Modules);

- FP — functional programming-friendly variations of the functions. See [FP Guide](https://date-fns.org/docs/FP-Guide);

- UTC (in development) — variations of the functions which calculate dates in UTC±00:00 timezone.

The later submodules are also included inside the former if you want to use multiple features from the list.

To use submodule features, [install the npm package](#npm) and then import a function from a submodule:

```js
// ESM variation:
import {addDays} from 'date-fns/esm'

// FP variation:
import addDays from 'date-fns/fp/addDays'

// UTC variation:
import addDays from 'date-fns/utc/addDays'

// Both FP and UTC:
import addDays from 'date-fns/fp/utc/addDays'

// ESM and FP:
import {addDays} from 'date-fns/esm/fp'

// ESM and UTC:
import {addDays} from 'date-fns/esm/utc'

// ESM, FP and UTC:
import {addDays} from 'date-fns/esm/fp/utc'
```

## Installation

The library is available as an [npm package](https://www.npmjs.com/package/date-fns),
a Bower package, and is also distributed through a [CDN](http://cdn.date-fns.org/).

### npm

To install the npm package, run:

```bash
npm install date-fns --save
#or
yarn add date-fns
```

To start using:

```js
var isToday = require('date-fns/isToday')
isToday(new Date())
//=> true
```

### Bower

To install the Bower package, run:

```bash
bower install date-fns
```

To start using it, add the library to your build and access it
via `window.dateFns`:

```js
dateFns.isToday(new Date())
//=> true
```

### CDN

To start using date-fns, simply add the following code into HTML:

```html
<script src="http://cdn.date-fns.org/VERSION/date_fns.min.js"></script>
<script>
  dateFns.isToday(new Date())
  //=> true
</script>
```

Replace `VERSION` with a proper version number e.g. `v2.0.0`.

See the [full list](http://cdn.date-fns.org/) of resources available on the CDN:

- `http://cdn.date-fns.org/VERSION/date_fns.js`
- `http://cdn.date-fns.org/VERSION/date_fns.js.map`
- `http://cdn.date-fns.org/VERSION/date_fns.min.js`
- `http://cdn.date-fns.org/VERSION/date_fns.min.js.map`
- `http://cdn.date-fns.org/VERSION/date_fns_docs.json`

### GitHub Releases

date-fns is available via [the releases page](https://github.com/date-fns/date-fns/releases)
where you can download the source code or individual files.
