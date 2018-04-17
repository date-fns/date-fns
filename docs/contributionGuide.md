# Contribution guide

To fire up the project, clone the repository and install packages with [yarn](https://yarnpkg.com):

```sh
git clone https://github.com/date-fns/date-fns.git
cd date-fns
yarn
```

To test a function in REPL, use `babel-node` located in `./node_modules/.bin`:

```sh
./node_modules/.bin/babel-node

> const toDate = require('./src/toDate')
undefined
> toDate('2017-11-17').toString()
'Fri Nov 17 2017 00:00:00 GMT+0100 (CET)'
>
```

Rebuild FP functions, typings and indices by using the following script. It could take around a minute:

```sh
./scripts/build/build.sh
```

Build date-fns to test in in your project:

```sh
env PACKAGE_OUTPUT_PATH="$(pwd)/../PATH-TO-YOUR-MODULE/node_modules/date-fns" ./scripts/build/package.sh
```

## Adding a new function

In order to add a new function, first you should choose its name.
The functions are named in camelCase. The following rules apply:
- If the function returns a modified date, the name should be a verb (`addDays`, `setDay`, ...).
- If the function takes some value from a date, its name should start with `get` (`getDaysInYear`, ...).
- If the function returns a new date somehow calculated from another date,
  its name should be a noun (`lastDayOfMonth`, `startOfDay`, ...).
- For the consistency with the standard JavaScript library,
  `date` in the name refers to the day of month. `toDate` is an exception of this rule.
- For similar reasons, `day` in the name refers to the day of the week.

Create a directory `src/yourFunction` and files `src/yourFunction/index.js` and `src/yourFunction/test.js`.

### Documentation

A function should have a valid documentation,
which is used for generating FP function, typings and date-fns.org documentation.

All functions should have `@name`, `@category`, `@summary`, `@description`, `@param`, `@returns`, `@throw` and `@example` fields,

![Documentation screenshot](https://github.com/date-fns/date-fns/blob/master/docs/images/jsdoc.png?raw=true)

### Function body

![Function body](https://github.com/date-fns/date-fns/blob/master/docs/images/functionBody.png?raw=true)

![Cleaning arguments](https://github.com/date-fns/date-fns/blob/master/docs/images/clean.png?raw=true)

![Passing arguments to other functions](https://github.com/date-fns/date-fns/blob/master/docs/images/passingArguments.png?raw=true)

### Tests for a function

Write tests for a function if file `test.js` in function's directory:

![Test screenshot 1](https://github.com/date-fns/date-fns/blob/master/docs/images/test1.png?raw=true)

![Test screenshot 2](https://github.com/date-fns/date-fns/blob/master/docs/images/test2.png?raw=true)

![Test screenshot 3](https://github.com/date-fns/date-fns/blob/master/docs/images/test3.png?raw=true)

### Tests for FP functions

In `src/fp/test.js` add two new tests for each new function:

![FP tests](https://github.com/date-fns/date-fns/blob/master/docs/images/testFP.png?raw=true)

### Order of arguments in-depth description

The normal order of arguments for non-FP functions uses the following schema:

```js
import {setHours, format} from 'date-fns'
import {es} from 'date-fns/esm/locale'

const formatResult = format(
  // A subject to apply the action to (i.e. format _this date_)
  new Date(),
  // Additional info for this action (i.e. specific pattern to format the date)
  "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  // All optional arguments in a single object
  {locale: es}
)

const result = setHours(
  // A subject to apply the action to (i.e. set hours to _this date_)
  new Date(),
  // Additional info for this action (i.e. number of hours to set)
  5,
  // All optional arguments in a single object
  { /* ... */ }
)
```

It mirrors the order of arguments in JavaScript standard library for consistency:

```js
const result = new Date().setHours(5)
```

and also puts all optional arguments in a single object passed as the last argument.

For FP-functions, the reversed argument order results in more situation specific arguments to be passed to functions last.

Example:
```js
import {formatWithOptions} from 'date-fns/esm/fp'
import {es} from 'date-fns/esm/locale'

//           <- more project specific args      more situation specific args ->
formatWithOptions({locale: es})("yyyy-MM-dd'T'HH:mm:ss.SSSxxx")(new Date())
```

That way, you can pass arguments once and reuse it many times:

```js
const format = formatWithOptions({locale: es})
// ...
const formatISO = format("yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
const formatISOShort = format('yyyy-MM-dd')
// ...
[new Date(), new Date(2018, 0, 1)].map(formatISO)
```
