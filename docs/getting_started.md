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
a Bower package, and is also distributed through [cdnjs](https://cdnjs.com/libraries/date-fns).

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

date-fns is available on [cdnjs](https://cdnjs.com/libraries/date-fns), simply add the following code into HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/VERSION/date_fns.js"></script>
<script>
  dateFns.isToday(new Date())
  //=> true
</script>
```

Replace `VERSION` with a proper version number e.g. `v1.0.0`.

### GitHub Releases

date-fns is available via [the releases page](https://github.com/date-fns/date-fns/releases)
where you can download the source code or individual files.
