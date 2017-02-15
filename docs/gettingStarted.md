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
[**140+ functions** for all occasions](https://date-fns.org/docs/).

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
var isToday = require('date-fns/is_today')
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

Replace `VERSION` with a proper version number e.g. `v1.0.0`.

See the [full list](http://cdn.date-fns.org/) of resources available on the CDN:

- `http://cdn.date-fns.org/VERSION/date_fns.js`
- `http://cdn.date-fns.org/VERSION/date_fns.js.map`
- `http://cdn.date-fns.org/VERSION/date_fns.min.js`
- `http://cdn.date-fns.org/VERSION/date_fns.min.js.map`
- `http://cdn.date-fns.org/VERSION/date_fns_docs.json`

### GitHub Releases

date-fns is available via [the releases page](https://github.com/date-fns/date-fns/releases)
where you can download the source code or individual files.
