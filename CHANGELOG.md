# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[Semantic Versioning]: http://semver.org/
[Keep a CHANGELOG]: http://keepachangelog.com/

## [Unreleased]

[See v2 Pre-Releases Change Log](https://gist.github.com/kossnocorp/a307a464760b405bb78ef5020a4ab136)
for the list of changes made since `v2.0.0-alpha.1`.

### Added

- FP functions like those in [lodash](https://github.com/lodash/lodash/wiki/FP-Guide),
  that support [currying](https://en.wikipedia.org/wiki/Currying), and, as a consequence,
  functional-style [function composing](https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba).

  Each non-FP function has two FP counterparts: one that has [Options](docs/Options) object as its first argument
  and one that hasn't. The name of the former has `WithOptions` added to the end of its name.

  In FP functions, the order of arguments is reversed.

  See [FP Guide](docs/fp) for more information.

  ```javascript
  import addYears from 'date-fns/fp/addYears'
  import formatWithOptions from 'date-fns/fp/formatWithOptions'
  import eoLocale from 'date-fns/locale/eo'

  // If FP function has not recieved enough arguments, it returns another function
  const addFiveYears = addYears(5)

  // Several arguments can be curried at once
  const dateToString = formatWithOptions({locale: eoLocale}, 'D MMMM YYYY')

  const dates = [
    new Date(2017, 0 /* Jan */, 1),
    new Date(2017, 1 /* Feb */, 11),
    new Date(2017, 6 /* Jul */, 2)
  ]

  const formattedDates = dates.map((date) => dateToString(addFiveYears(date)))
  //=> ['1 januaro 2022', '11 februaro 2022', '2 julio 2022']
  ```

- Added support for [ECMAScript Modules](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)
  via `'date-fns/esm'` subpackage.

  It allows usage with bundlers that support tree-shaking,
  like [rollup.js](http://rollupjs.org) and [webpack](https://webpack.js.org):

  ```javascript
  // Without tree-shaking:
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'

  // With tree-shaking:
  import {format, parse} from 'date-fns/esm'
  ```

  Also, as `'date-fns/esm'` function submodules provide default export,
  they can be used with TypeScript to import functions in more idiomatic way:

  ```typescript
  // In TypeScript,
  import * as format from 'date-fns/format'

  // is same as:
  import format from 'date-fns/esm/format'
  ```

- `formatRelative` function. See [formatRelative](https://date-fns.org/docs/formatRelative)

- [Ukrainian locale (ua)](https://github.com/date-fns/date-fns/pull/532)
  (thanks to Andrii Korzh [@korzhyk](https://github.com/korzhyk))

- [Vietnamese locale (vi)](https://github.com/date-fns/date-fns/pull/546)
  (kudos to [@trongthanh](https://github.com/trongthanh))

- Flow typings for `index.js`, `fp/index.js`, `locale/index.js`, and their ESM equivalents.
  See PR [#558](https://github.com/date-fns/date-fns/pull/558)

- [en-GB locale](https://github.com/date-fns/date-fns/pull/563)
  (kudos to [@glintik](https://github.com/glintik))

- [Fixes danish locale support for long and relative formats](https://github.com/date-fns/date-fns/pull/555) (kudos to [@stefanbugge](https://github.com/stefanbugge))

- [Support for long and relative formats for German locale](https://github.com/date-fns/date-fns/pull/553) (thanks to [@vanvuongngo](https://github.com/vanvuongngo)).

- [fr-CH locale](https://github.com/date-fns/date-fns/pull/553) (kudos to [@vanvuongngo](https://github.com/vanvuongngo)).

- [Support for long and relative formats for Swedish locale](https://github.com/date-fns/date-fns/pull/570) (thanks to [@alexandernanberg](https://github.com/alexandernanberg)).

### Changed

- **BREAKING**: function submodules now use camelCase naming schema:

  ```javascript
  // Before v2.0.0
  import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'

  // v2.0.0 onward
  import differenceInCalendarISOYears from 'date-fns/differenceInCalendarISOYears'
  ```

- **BREAKING**: min and max functions now accept an array of dates
  rather than spread arguments.

  ```javascript
  // Before v2.0.0
  var date1 = new Date(1989, 6 /* Jul */, 10)
  var date2 = new Date(1987, 1 /* Feb */, 11)

  var minDate = min(date1, date2)
  var maxDate = max(date1, date2)

  // v2.0.0 onward:
  var dates = [new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11)]

  var minDate = min(dates)
  var maxDate = max(dates)
  ```

- **BREAKING**: remove all functions that create the current date internally:

  - `distanceInWordsToNow`
  - `isFuture`
  - `isPast`
  - `endOfToday`
  - `endOfTomorrow`
  - `endOfYesterday`
  - `startOfToday`
  - `startOfTomorrow`
  - `startOfYesterday`
  - `isToday`
  - `isTomorrow`
  - `isYesterday`
  - `isThisSecond`
  - `isThisMinute`
  - `isThisHour`
  - `isThisWeek`
  - `isThisISOWeek`
  - `isThisMonth`
  - `isThisQuarter`
  - `isThisYear`
  - `isThisISOYear`

  These functions are not pure, cannot have FP-versions [#253](https://github.com/date-fns/date-fns/issues/253)
  and would add extra code for UTC-versions [#376](https://github.com/date-fns/date-fns/issues/376).

  See issue: [#377](https://github.com/date-fns/date-fns/issues/377)

  ```javascript
  // Before v2.0.0
  var result = endOfToday()

  // v2.0.0 onward
  var result = endOfDay(new Date())
  ```

  Upgrade guide:

  - `distanceInWordsToNow(date)` → `formatDistance(date, new Date())`
  - `isFuture(date)` → `isAfter(date, new Date())`
  - `isPast(date)` → `isBefore(date, new Date())`
  - `endOfToday()` → `endOfDay(new Date())`
  - `endOfTomorrow()` → `endOfDay(addDays(new Date(), 1))`
  - `endOfYesterday()` → `endOfDay(subDays(new Date(), 1))`
  - `startOfToday()` → `startOfDay(new Date())`
  - `startOfTomorrow()` → `startOfDay(addDays(new Date(), 1))`
  - `startOfYesterday()` → `startOfDay(subDays(new Date(), 1))`
  - `isToday(date)` → `isSameDay(new Date(), date)`
  - `isTomorrow(date)` → `isSameDay(date, addDays(new Date(), 1))`
  - `isYesterday(date)` → `isSameDay(date, subDays(new Date(), 1))`
  - `isThisSecond(date)` → `isSameSecond(date, new Date())`
  - `isThisMinute(date)` → `isSameMinute(date, new Date())`
  - `isThisHour(date)` → `isSameHour(date, new Date())`
  - `isThisWeek(date)` → `isSameWeek(date, new Date())`
  - `isThisISOWeek(date)` → `isSameISOWeek(date, new Date())`
  - `isThisMonth(date)` → `isSameMonth(date, new Date())`
  - `isThisQuarter(date)` → `isSameQuarter(date, new Date())`
  - `isThisYear(date)` → `isSameYear(date, new Date())`
  - `isThisISOYear(date)` → `isSameISOYear(date, new Date())`

- **BREAKING**: make the second argument of `format` non-optional in favor of explicitness.

  ```javascript
  // Before v2.0.0
  format(new Date(2016, 0, 1))

  // v2.0.0 onward
  format(new Date(2016, 0, 1), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
  ```

- **BREAKING**: functions renamed:

  - `areRangesOverlapping` → `areIntervalsOverlapping`
  - `eachDay` → `eachDayOfInterval`
  - `getOverlappingDaysInRanges` → `getOverlappingDaysInIntervals`
  - `isWithinRange` → `isWithinInterval`

  This change was made to mirror the use of word "interval" in standard ISO 8601:2004 terminology:

  ```
  2.1.3
  time interval
  part of the time axis limited by two instants
  ```

  Also these functions now accept an object with `start` and `end` properties
  instead of two arguments as an interval. All these functions
  throw `RangeError` if the start of the interval is after its end
  or if any date in interval is `Invalid Date`.

  ```javascript
  // Before v2.0.0

  areRangesOverlapping(
    new Date(2014, 0, 10), new Date(2014, 0, 20),
    new Date(2014, 0, 17), new Date(2014, 0, 21)
  )

  eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))

  getOverlappingDaysInRanges(
    new Date(2014, 0, 10), new Date(2014, 0, 20),
    new Date(2014, 0, 17), new Date(2014, 0, 21)
  )

  isWithinRange(
    new Date(2014, 0, 3),
    new Date(2014, 0, 1), new Date(2014, 0, 7)
  )

  // v2.0.0 onward

  areIntervalsOverlapping(
    {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
    {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
  )

  eachDayOfInterval({start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)})

  getOverlappingDaysInIntervals(
    {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
    {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
  )

  isWithinInterval(
    new Date(2014, 0, 3),
    {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
  )
  ```

- **BREAKING**: functions renamed:

  - `distanceInWords` → `formatDistance`
  - `distanceInWordsStrict` → `formatDistanceStrict`

  to make them consistent with `format` and `formatRelative`.
  The order of arguments is swapped to make them consistent with `differenceIn...` functions.
  `partialMethod` option in `formatDistanceStrict` is renamed to `roundingMethod`.

  ```javascript
  // Before v2.0.0

  distanceInWords(
    new Date(1986, 3, 4, 10, 32, 0),
    new Date(1986, 3, 4, 11, 32, 0),
    {addSuffix: true}
  ) //=> 'in about 1 hour'

  distanceInWordsStrict(
    new Date(1986, 3, 4, 10, 32, 0),
    new Date(1986, 3, 4, 10, 33, 1),
    {partialMethod: 'ceil'}
  ) //=> '2 minutes'

  // v2.0.0 onward

  formatDistance(
    new Date(1986, 3, 4, 11, 32, 0),
    new Date(1986, 3, 4, 10, 32, 0),
    {addSuffix: true}
  ) //=> 'in about 1 hour'

  formatDistanceStrict(
    new Date(1986, 3, 4, 10, 33, 1),
    new Date(1986, 3, 4, 10, 32, 0),
    {roundingMethod: 'ceil'}
  ) //=> '2 minutes'
  ```

- **BREAKING**: `parse` renamed to `toDate`,
  created a new function `parse` which parses a string using a provided format.

  ```javascript
  // Before v2.0.0
  parse('2016-01-01')

  // v2.0.0 onward
  toDate('2016-01-01')
  parse('2016-01-01', 'YYYY-MM-DD', new Date())
  ```

- **BREAKING**: new locale format.
  See [docs/Locale](https://date-fns.org/docs/Locale).
  Locales renamed:

  - `en` → `en-US`
  - `zh_cn` → `zh-CN`
  - `zh_tw` → `zh-TW`

  ```javascript
  // Before v2.0.0
  import locale from 'date-fns/locale/zh_cn'

  // v2.0.0 onward
  import locale from 'date-fns/locale/zh-CN'
  ```

- **BREAKING**: now `closestTo` and `closestIndexTo` don't throw an exception
  when the second argument is not an instance of array.

- **BREAKING**: now `isValid` doesn't throw an exception
  if the first argument is not an instance of Date.
  Instead, argument is converted beforehand using `toDate`.

  Examples:

  | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
  |---------------------------|---------------|---------------|
  | `new Date()`              | `true`        | `true`        |
  | `new Date('2016-01-01')`  | `true`        | `true`        |
  | `new Date('')`            | `false`       | `false`       |
  | `new Date(1488370835081)` | `true`        | `true`        |
  | `new Date(NaN)`           | `false`       | `false`       |
  | `'2016-01-01'`            | `TypeError`   | `true`        |
  | `''`                      | `TypeError`   | `false`       |
  | `1488370835081`           | `TypeError`   | `true`        |
  | `NaN`                     | `TypeError`   | `false`       |

  We introduce this change to make *date-fns* consistent with ECMAScript behavior
  that try to coerce arguments to the expected type
  (which is also the case with other *date-fns* functions).

- **BREAKING**: functions now throw `RangeError` if optional values passed to `options`
  are not `undefined` or have expected values.
  This change is introduced for consistency with ECMAScript standard library which does the same.
  See [docs/Options.js](https://github.com/date-fns/date-fns/blob/master/docs/Options.js)

- **BREAKING**: all functions now handle arguments by following rules:

  - as before, arguments expected to be `Date` are converted to `Date` using *date-fns'* `toDate` function;
  - arguments expected to be numbers are converted to numbers using JavaScript's `Number` function;
  - arguments expected to be strings arguments are converted to strings using JavaScript's `String` function.

  If any of resulting arguments is invalid (i.e. `NaN` for numbers and `Invalid Date` for dates),
  an invalid value will be returned:

  - `false` for functions that return booleans (expect `isValid`);
  - `Invalid Date` for functions that return dates;
  - `NaN` for functions that return numbers;
  - and `String('Invalid Date')` for functions that return strings.

  See tests and PR [#460](https://github.com/date-fns/date-fns/pull/460) for exact behavior.

- **BREAKING**: all functions now check if the passed number of arguments is less
  than the number of required arguments and throw `TypeError` exception if so.

- **BREAKING**: removed `isDate`. Instead, you can use `x instanceof Date`.

- Every function now has `options` as the last argument which is passed to all its dependencies
  for consistency and future features.
  See [docs/Options.js](https://github.com/date-fns/date-fns/blob/master/docs/Options.js)

- **BREAKING**: The Bower & UMD/CDN package versions are no longer supported.

- **BREAKING**: `null` now is not a valid date. `isValid(null)` returns `false`;
  `toDate(null)` returns an invalid date. Since `toDate` is used internally
  by all the functions, operations over `null` will also return an invalid date.
  [See #537](https://github.com/date-fns/date-fns/issues/537) for the reasoning.

- `toDate` (previously `parse`) and `isValid` functions now accept `any` type
  as the first argument.

## [1.28.5] - 2017-05-19

### Fixed

- Fix a.m./p.m. formatters in Chinese Simplified locale.
  Thanks to [@fnlctrl](https://github.com/fnlctrl).
  See PR [#486](https://github.com/date-fns/date-fns/pull/486)

## [1.28.4] - 2017-04-26

### Fixed

- Fix accents on weekdays in the Italian locale.
  See PR [#481](https://github.com/date-fns/date-fns/pull/481).
  Thanks to [@albertorestifo](https://github.com/albertorestifo)

- Fix typo in `ddd` format token in Spanish language locale.
  Kudos to [@fjaguero](https://github.com/fjaguero).
  See PR [#482](https://github.com/date-fns/date-fns/pull/482)

## [1.28.3] - 2017-04-14

### Fixed

- Fix ordinal numbers for Danish language locale. Thanks to [@kgram](https://github.com/kgram).
  See PR [#474](https://github.com/date-fns/date-fns/pull/474)

## [1.28.2] - 2017-03-27

### Fixed

- Fix `dd` and `ddd` formatters in Polish language locale. Kudos to [@justrag](https://github.com/justrag).
  See PR: [#467](https://github.com/date-fns/date-fns/pull/467)

## [1.28.1] - 2017-03-19

### Fixed

- Fix DST border bug in `addMilliseconds`, `addSeconds`, `addMinutes`, `addHours`,
  `subMilliseconds`, `subSeconds`, `subMinutes` and `subHours`.
  See issue [#465](https://github.com/date-fns/date-fns/issues/465)

- Minor fix for Indonesian locale. Thanks to [@bentinata](https://github.com/bentinata).
  See PR: [#458](https://github.com/date-fns/date-fns/pull/458)

## [1.28.0] - 2017-02-27

### Added

- [Romanian locale (ro)](https://github.com/date-fns/date-fns/pull/446)
  (thanks to Sergiu Munteanu [@jsergiu](https://github.com/jsergiu))

### Fixed

- All functions now convert all their arguments to the respective types.
  See PR: [#443](https://github.com/date-fns/date-fns/pull/443)

- Fixes for ordinals (1er, 2, 3, …) in French locale.
  Thanks to [@fbonzon](https://github.com/fbonzon).
  See PR: [#449](https://github.com/date-fns/date-fns/pull/449)

## [1.27.2] - 2017-02-01

### Fixed

- Various fixes for Dutch locale. See PR: [#416](https://github.com/date-fns/date-fns/pull/416).
  Thanks to Ruben Stolk [@rubenstolk](https://github.com/rubenstolk)

## [1.27.1] - 2017-01-20

### Fixed

- Added generation of TypeScript locale sub-modules, allowing import of locales in TypeScript.

## [1.27.0] - 2017-01-19

### Added

- [Macedonian locale (mk)](https://github.com/date-fns/date-fns/pull/398)
  (thanks to Petar Vlahu [@vlahupetar](https://github.com/vlahupetar))

## [1.26.0] - 2017-01-15

### Added

- `getTime`

### Fixed

- Various fixes for Japanese locale. See PR: [395](https://github.com/date-fns/date-fns/pull/395).
  Thanks to Yamagishi Kazutoshi [@ykzts](https://github.com/ykzts)

## [1.25.0] - 2017-01-11

### Added

- [Bulgarian locale (bg)](https://github.com/date-fns/date-fns/pull/357)
  (thanks to Nikolay Stoynov [@arvigeus](https://github.com/arvigeus))

- [Czech locale (cs)](https://github.com/date-fns/date-fns/pull/386)
  (thanks to David Rus [@davidrus](https://github.com/davidrus))

## [1.24.0] - 2017-01-06

### Added

- [Modern Standard Arabic locale (ar)](https://github.com/date-fns/date-fns/pull/367)
  (thanks to Abdallah Hassan [@AbdallahAHO](https://github.com/AbdallahAHO))

## [1.23.0] - 2017-01-05

### Added

- Auto generate TypeScript and flow typings from documentation on release.
  Thanks to [@mattlewis92](https://github.com/mattlewis92).
  See related PRs: [#355](https://github.com/date-fns/date-fns/pull/355),
  [#370](https://github.com/date-fns/date-fns/pull/370)

- [Croatian locale (hr)](https://github.com/date-fns/date-fns/pull/365)
  (thanks to Matija Marohnić [@silvenon](https://github.com/silvenon))

- [Thai locale (th)](https://github.com/date-fns/date-fns/pull/362)
  (thanks to Athiwat Hirunworawongkun [@athivvat](https://github.com/athivvat))

- [Finnish locale (fi)](https://github.com/date-fns/date-fns/pull/361)
  (thanks to Pyry-Samuli Lahti [@Pyppe](https://github.com/Pyppe))

## [1.22.0] - 2016-12-28

### Added

- [Icelandic locale (is)](https://github.com/date-fns/date-fns/pull/356)
  (thanks to Derek Blank [@derekblank](https://github.com/derekblank))

## [1.21.1] - 2016-12-18

### Fixed

- Fix `isBefore` and `isAfter` documentation mistakes.

## [1.21.0] - 2016-12-16

### Added

- [Filipino locale (fil)](https://github.com/date-fns/date-fns/pull/339)
  (thanks to Ian De La Cruz [@RIanDeLaCruz](https://github.com/RIanDeLaCruz))

- [Danish locale (da)](https://github.com/date-fns/date-fns/pull/343)
  (kudos to Anders B. Hansen [@Andersbiha](https://github.com/Andersbiha))

## [1.20.1] - 2016-12-14

### Fixed

- Fix documentation for `getOverlappingDaysInRanges`.

## [1.20.0] - 2016-12-13

### Added

- `areRangesOverlapping` and `getOverlappingDaysInRanges`
  Thanks to Joanna T [@asia-t](https://github.com/asia-t).
  See PR: [#331](https://github.com/date-fns/date-fns/pull/331)

## [1.19.0] - 2016-12-13

### Added

- [Greek locale (el)](https://github.com/date-fns/date-fns/pull/334)
  (kudos to Theodoros Orfanidis [@teoulas](https://github.com/teoulas))

- [Slovak locale (sk)](https://github.com/date-fns/date-fns/pull/336)
  (kudos to Marek Suscak [@mareksuscak](https://github.com/mareksuscak))

- Add yarn support.
  Thanks to Uladzimir Havenchyk [@havenchyk](https://github.com/havenchyk).
  See PR: [#288](https://github.com/date-fns/date-fns/pull/288)

## [1.18.0] - 2016-12-12

### Added

- [Turkish locale (tr)](https://github.com/date-fns/date-fns/pull/329)
  (kudos to Alpcan Aydın [@alpcanaydin](https://github.com/alpcanaydin))

- [Korean locale (ko)](https://github.com/date-fns/date-fns/pull/327)
  (thanks to Hong Chulju [@angdev](https://github.com/angdev))

### Fixed

- `SS` and `SSS` formats in `format` are now correctly displayed with leading zeros.
  Thanks to Paul Dijou [@pauldijou](https://github.com/pauldijou).
  See PR: [#330](https://github.com/date-fns/date-fns/pull/330)

## [1.17.0] - 2016-12-10

### Added

- [Polish locale (pl)](https://github.com/date-fns/date-fns/pull/294)
  (thanks to Mateusz Derks [@ertrzyiks](https://github.com/ertrzyiks))

- [Portuguese locale (pt)](https://github.com/date-fns/date-fns/pull/316)
  (thanks to Dário Freire [@dfreire](https://github.com/dfreire))

- [Swedish locale (sv)](https://github.com/date-fns/date-fns/pull/311)
  (thanks to Johannes Ulén [@ejulen](https://github.com/ejulen))

- [French locale (fr)](https://github.com/date-fns/date-fns/pull/281)
  (thanks to Jean Dupouy [@izeau](https://github.com/izeau))

- Performance tests. See PR: [#289](https://github.com/date-fns/date-fns/pull/289)

### Fixed

- Fix TypeScript and flow typings for `isValid`.
  See PR: [#310](https://github.com/date-fns/date-fns/pull/310)

- Fix incorrect locale tests that could potentially lead to `format` bugs.
  Kudos to Mateusz Derks [@ertrzyiks](https://github.com/ertrzyiks).
  See related PRs: [#312](https://github.com/date-fns/date-fns/pull/312),
  [#320](https://github.com/date-fns/date-fns/pull/320)

- Minor language fixes in the documentation.
  Thanks to Vedad Šoše [@vedadsose](https://github.com/vedadsose) ([#314](https://github.com/date-fns/date-fns/pull/314))
  and Asia [@asia-t](https://github.com/asia-t) ([#318](https://github.com/date-fns/date-fns/pull/318))

### Changed

- `format` now returns `String('Invalid Date')` if the passed date is invalid.
  See PR: [#323](https://github.com/date-fns/date-fns/pull/323)

- `distanceInWords`, `distanceInWordsToNow`, `distanceInWordsStrict` and `format` functions now
  check if the passed locale is valid, and fallback to English locale otherwise.
  See PR: [#321](https://github.com/date-fns/date-fns/pull/321)

- *Internal*: use a loop instead of `Object.keys` in `buildFormattingTokensRegExp`
  to improve compatibility with older browsers.
  See PR: [#322](https://github.com/date-fns/date-fns/pull/322)

## [1.16.0] - 2016-12-08

### Added

- [Italian locale (it)](https://github.com/date-fns/date-fns/pull/298)
  (thanks to Alberto Restifo [@albertorestifo](https://github.com/albertorestifo))

- For German `buildDistanceInWordsLocale`, add nominative case translations (for distances without a suffix).
  Kudos to Asia [@asia-t](https://github.com/asia-t).
  See related PR: [#295](https://github.com/date-fns/date-fns/pull/295)

## [1.15.1] - 2016-12-07

### Fixed

- Fixed TypeScript imports from individual modules.
  Thanks to [@mattlewis92](https://github.com/mattlewis92).
  See related PR: [#287](https://github.com/date-fns/date-fns/pull/287)

## [1.15.0] - 2016-12-07

### Added

- [Indonesian locale (id)](https://github.com/date-fns/date-fns/pull/299)
  (thanks to Rahmat Budiharso [@rbudiharso](https://github.com/rbudiharso))

- [Catalan locale (ca)](https://github.com/date-fns/date-fns/pull/300)
  (thanks to Guillermo Grau [@guigrpa](https://github.com/guigrpa))

### Fixed

- Fix some inaccuracies in Spanish locale.
  Kudos to [@guigrpa](https://github.com/guigrpa).
  See related PR: [#302](https://github.com/date-fns/date-fns/pull/302)

## [1.14.1] - 2016-12-06

### Fixed

- Fixed broken test for Norwegian Bokmål locale.

## [1.14.0] - 2016-12-06

### Added

- [Norwegian Bokmål locale (nb)](https://github.com/date-fns/date-fns/pull/291)
  (thanks to Hans-Kristian Koren [@Hanse](https://github.com/Hanse))

## [1.13.0] - 2016-12-06

### Added

- [Chinese Traditional locale (zh_tw)](https://github.com/date-fns/date-fns/pull/283)
  (thanks to tonypai [@tpai](https://github.com/tpai)).

- [Dutch language locale (nl)](https://github.com/date-fns/date-fns/pull/278)
  (kudos to Jorik Tangelder [@jtangelder](https://github.com/jtangelder))

## [1.12.1] - 2016-12-05

### Fixed

- Added `distanceInWordsStrict` to the list of supported functions in I18n doc.

## [1.12.0] - 2016-12-05

### Added

- [Spanish language locale (es)](https://github.com/date-fns/date-fns/pull/269)
  (thanks to Juan Angosto [@juanangosto](https://github.com/juanangosto)).

### Fixed

- Fix flow typings for some of the functions.
  See PR: [#273](https://github.com/date-fns/date-fns/pull/273)

## [1.11.2] - 2016-11-28

### Fixed

- Bug in `parse` when it sometimes parses ISO week-numbering dates incorrectly.
  See PR: [#262](https://github.com/date-fns/date-fns/pull/262)

- Bug in some functions which caused them to handle dates earlier than 100 AD incorrectly.
  See PR: [#263](https://github.com/date-fns/date-fns/pull/263)

## [1.11.1] - 2016-11-24

### Fixed

- Include TypeScript typings with npm package.

## [1.11.0] - 2016-11-23

### Added

- `distanceInWordsStrict`.
  Kudos to [@STRML](https://github.com/STRML).
  See related PR: [#254](https://github.com/date-fns/date-fns/pull/254)

- [TypeScript](https://www.typescriptlang.org/) typings for all functions.
  Kudos to [@mattlewis92](https://github.com/mattlewis92).
  See related PR: [#255](https://github.com/date-fns/date-fns/pull/255)

## [1.10.0] - 2016-11-01

### Added

- `parse` now can parse dates that are ISO 8601 centuries (e.g., `19` and `+0019`).

  ```javascript
  var result = parse('19')
  //=> Mon Jan 01 1900 00:00:00
  ```

- In `parse`, added ability to specify the number of additional digits
  for extended year or century format (possible values are 0, 1 or 2; default is 2).

  ```javascript
  parse('+002016-11-01')
  parse('+02016-11-01', {additionalDigits: 1})
  parse('+2016-11-01', {additionalDigits: 0})
  ```

## [1.9.0] - 2016-10-25

### Added

- Got index.js imports to work with SystemJS.

## [1.8.1] - 2016-10-24

### Fixed

- Added Japanese and German language locales to the list in I18n doc.

## [1.8.0] - 2016-10-23

### Added

- [Japanese language locale (ja)](https://github.com/date-fns/date-fns/pull/241)
  (thanks to Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu) again!)

- `getISODay`

- `setISODay`

## [1.7.0] - 2016-10-20

### Added

- [German language locale (de)](https://github.com/date-fns/date-fns/pull/237)
  (thanks to Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)).

## [1.6.0] - 2016-10-16

### Added

- [Chinese Simplified locale (zh_cn)](https://github.com/date-fns/date-fns/pull/235)
  (kudos to Changyu [@KingMario](https://github.com/KingMario) Geng).

## [1.5.2] - 2016-10-13

### Fixed

- Incorrectly generated docs for `format`.

- Fixed typo in I18n doc.

## [1.5.1] - 2016-10-12

### Fixed

- A change log entry for [1.5.0] is added.

## [1.5.0] - 2016-10-12

### Added

- [The initial I18n support](https://date-fns.org/docs/I18n)

## [1.4.0] - 2016-10-09

### Added

- Basic [SystemJS](https://github.com/systemjs/systemjs) support.

### Fixed

- Fix incorrect behaviour of `YYYY` and `YY` for years prior to 1000:
  now `format(new Date('0001-01-01'), 'YYYY-MM-DD')` returns `0001-01-01`
  instead of `1-01-01`.

## [1.3.0] - 2016-05-26

### Added

- `closestIndexTo`

## [1.2.0] - 2016-05-23

### Added

- Add an ability to pass negative numbers to `setDay`.

## [1.1.1] - 2016-05-19

### Fixed

- Fix [Flow](http://flowtype.org/) declarations for some of the functions.

## [1.1.0] - 2016-05-19

### Added

- [Flow](http://flowtype.org/) declarations for each function
  in [the ".js.flow" style](http://flowtype.org/docs/declarations.html#declaration-files).
  Kudos to [@JohnyDays](https://github.com/JohnyDays). See related PRs:

  - [#205](https://github.com/date-fns/date-fns/pull/205)

  - [#207](https://github.com/date-fns/date-fns/pull/207)

## [1.0.0] - 2016-05-18

### Fixed

- `format` now returns the correct result for key `E`.

- Prevent `startOf...`, `endOf...` and `lastDayOf...` functions
  to return dates with an incorrect time when the date is modifying
  into another time zone.

- `parse` now parses years from 1 AD to 99 AD correctly.

- Fix a bug in `getISOWeek` appearing because of a changing time zone
  (e.g., when the given date is in DST and the start of the ISO year is not).

### Changed

- **BREAKING**: all functions are moved to the root of the library, so they
  are now accessible with `require('date-fns/name_of_function')` or
  `import nameOfFunction from 'date-fns/name_of_function'`.

  ```javascript
  // Before v1.0.0
  var addMonths = require('date-fns/src/add_months')

  // v1.0.0 onward
  var addMonths = require('date-fns/add_months')
  ```

- **BREAKING**: functions that had the last optional argument `weekStartsAt`
  (i.e. `endOfWeek`, `isSameWeek`, `lastDayOfWeek`, `setDay`, `startOfWeek`)
  now instead receive the object `options` with the property `options.weekStartsOn`
  as the last argument.

  ```javascript
  // Before v1.0.0
  var result = endOfWeek(new Date(2014, 8, 2), 1)

  // v1.0.0 onward
  var result = endOfWeek(new Date(2014, 8, 2), {weekStartsOn: 1})
  ```

- **BREAKING**: remove the function `getTimeSinceMidnight` that was used inside
  the other functions.

- **BREAKING**: `differenceInDays` now returns the number of full days instead
  of calendar days.

- **BREAKING**: `eachDay` and `isWithinRange` now throw an exception
  when the given range boundaries are invalid.

- Faster `isLeapYear`.

- *Internal*: make the documentation more verbose.

- *Internal*: convert the tests from Chai to power-assert allowing them
  to run against IE8.

### Added

- `addISOYears`

- `closestTo`

- `differenceInCalendarDays`

- `differenceInCalendarISOWeeks`

- `differenceInCalendarISOYears`

- `differenceInCalendarMonths`

- `differenceInCalendarQuarters`

- `differenceInCalendarWeeks`

- `differenceInCalendarYears`

- `differenceInHours`

- `differenceInISOYears`

- `differenceInMilliseconds`

- `differenceInMinutes`

- `differenceInMonths`

- `differenceInQuarters`

- `differenceInSeconds`

- `differenceInWeeks`

- `differenceInYears`

- `distanceInWords`

- `distanceInWordsToNow`

- `endOfISOWeek`

- `endOfISOYear`

- `endOfToday`

- `endOfTomorrow`

- `endOfYesterday`

- `getDaysInYear`

- `isDate`

- `isFriday`

- `isMonday`

- `isSameISOWeek`

- `isSameISOYear`

- `isSaturday`

- `isSunday`

- `isThisHour`

- `isThisISOWeek`

- `isThisISOYear`

- `isThisMinute`

- `isThisMonth`

- `isThisQuarter`

- `isThisSecond`

- `isThisWeek`

- `isThisYear`

- `isThursday`

- `isTomorrow`

- `isTuesday`

- `isValid`

- `isWednesday`

- `isYesterday`

- `lastDayOfISOWeek`

- `lastDayOfISOYear`

- `startOfISOWeek`

- `startOfToday`

- `startOfTomorrow`

- `startOfYesterday`

- `subISOYears`

- Add `Qo`, `W`, `Wo`, `WW`, `GG`, `GGGG`, `Z`, `ZZ`, `X`, `x` keys to `format`.

## [0.17.0] - 2015-09-29

### Fixed

- Fix a lot of bugs appearing when date is modifying into other time zone
  (e.g., when adding months and original date is in DST but new date is not).

- Prevent instances of Date to lose milliseconds value when passed to.
  `parse` in IE10.

### Changed

- `setISOWeek` now keeps time from original date.

- *Internal*: reuse `getDaysInMonth` inside of `addMonths`.

### Added

- `differenceInDays`

- `getTimeSinceMidnight`

- `format` now has new format key `aa`, which returns `a.m.`/`p.m.`
  as opposed to `a` that returns `am`/`pm`.

- Complete UMD package (for Bower and CDN).

## [0.16.0] - 2015-09-01

### Changed

- Use `parse` to clean date arguments in all functions.

- `parse` now fallbacks to `new Date` when the argument
  is not an ISO formatted date.

- *Internal*: reuse `getDaysInMonth` inside of `setMonth`.

### Added

- `addQuarters`

- `addWeeks`

- `endOfQuarter`

- `getDate`

- `getDay`

- `getDaysInMonth`

- `getHours`

- `getISOWeeksInYear`

- `getMilliseconds`

- `getMinutes`

- `getMonth`

- `getSeconds`

- `getYear`

- `isLeapYear`

- `isSameHour`

- `isSameMinute`

- `isSameQuarter`

- `isSameSecond`

- `lastDayOfQuarter`

- `lastDayOfWeek`

- `max`

- `min`

- `setDate`

- `setDay`

- `setHours`

- `setMilliseconds`

- `setMinutes`

- `setSeconds`

- `startOfQuarter`

- `subQuarters`

- `subWeeks`

## [0.15.0] - 2015-08-26

### Changed

- `format` now returns `a.m.`/`p.m.` instead of `am`/`pm`.

- `setMonth` now sets last day of month if original date was last day
  of longer month.

- *Internal*: Fix code style according to ESLint.

- *Internal*: Make tests run through all time zones.

### Added

- `getQuarter`

- `setQuarter`

- `getDayOfYear`

- `setDayOfYear`

- `isPast`

- `addSeconds`

- `subSeconds`

- `startOfSecond`

- `endOfSecond`

- `startOfMinute`

- `endOfMinute`

- `addMilliseconds`

- `subMilliseconds`

- `endOfYear`

- `addYears`

- `subYears`

- `lastDayOfYear`

- `lastDayOfMonth`

## [0.14.11] - 2015-08-21

### Fixed

- `format` now uses `parse` to avoid time zone bugs.

### Changed

- `setIsoWeek` now sets time to the start of the day.

## [0.14.10] - 2015-07-29

### Fixed

- `format` now behaves correctly with 12:00 am.

- `format` now behaves correctly with ordinal numbers.

### Added

- `compareAsc`

- `compareDesc`

- `addHours`

- `subHours`

- `isSameDay`

- `parse`

- `getISOYear`

- `setISOYear`

- `startOfISOYear`

- `getISOWeek`

- `setISOWeek`

## [0.14.9] - 2015-01-14

### Fixed

- `addMonths` now correctly behaves with February
  (see [#18](https://github.com/js-fns/date-fns/pull/18)).

## [0.14.8] - 2014-12-25

### Fixed

- `format` function now behaves correctly with `pm`/`am`.

## [0.14.6] - 2014-12-04

### Fixed

- Fix broken Bower support.

## [0.14.0] - 2014-11-05

### Added

- Bower package.

## [0.13.0] - 2014-10-22

### Added

- `addMinutes`

- `subMinutes`

- `isEqual`

- `isBefore`

- `isAfter`

## [0.12.1] - 2014-10-19

### Fixed

- Incorrect rounding in `DDD` formatter.

## [0.12.0] - 2014-10-15

### Added

- `isSameYear`

## [0.11.0] - 2014-10-15

### Added

- `isWithinRange`

## [0.10.0] - 2014-10-13

### Added

- `format`

- `startOfYear`

## [0.9.0] - 2014-10-10

### Changed

- *Internal*: simplify `isWeekend`

### Added

- `isFuture`

## [0.8.0] - 2014-10-09

### Changed

- *Internal*: reuse `addDays` inside of `subDays`.

### Added

- `addMonths`

- `subMonths`

- `setMonth`

- `setYear`

## [0.7.0] - 2014-10-08

### Added

- `isSameWeek`

## [0.6.0] - 2014-10-07

### Fixed

- Inconsistent behavior of `endOfMonth`.

### Added

- `isFirstDayOfMonth`

- `isLastDayOfMonth`

- `isSameMonth`

## [0.5.0] - 2014-10-07

### Added

- `addDays`

- `subDays`

## [0.4.0] - 2014-10-07

### Added

- `startOfWeek`

- `endOfWeek`

- `eachDay`

## [0.3.0] - 2014-10-06

### Changed

- `startOfDay` now sets milliseconds as well.

### Added

- `endOfDay`

- `startOfMonth`

- `endOfMonth`

## [0.2.0] - 2014-10-06

### Added

- `isToday`

- `isWeekend`

## 0.1.0 - 2014-10-06

### Added

- `startOfDay`

[Unreleased]: https://github.com/date-fns/date-fns/compare/v1.28.5...HEAD
[1.28.5]: https://github.com/date-fns/date-fns/compare/v1.28.4...v1.28.5
[1.28.4]: https://github.com/date-fns/date-fns/compare/v1.28.3...v1.28.4
[1.28.3]: https://github.com/date-fns/date-fns/compare/v1.28.2...v1.28.3
[1.28.2]: https://github.com/date-fns/date-fns/compare/v1.28.1...v1.28.2
[1.28.1]: https://github.com/date-fns/date-fns/compare/v1.28.0...v1.28.1
[1.28.0]: https://github.com/date-fns/date-fns/compare/v1.27.2...v1.28.0
[1.27.2]: https://github.com/date-fns/date-fns/compare/v1.27.1...v1.27.2
[1.27.1]: https://github.com/date-fns/date-fns/compare/v1.27.0...v1.27.1
[1.27.0]: https://github.com/date-fns/date-fns/compare/v1.26.0...v1.27.0
[1.26.0]: https://github.com/date-fns/date-fns/compare/v1.25.0...v1.26.0
[1.25.0]: https://github.com/date-fns/date-fns/compare/v1.24.0...v1.25.0
[1.24.0]: https://github.com/date-fns/date-fns/compare/v1.23.0...v1.24.0
[1.23.0]: https://github.com/date-fns/date-fns/compare/v1.22.0...v1.23.0
[1.22.0]: https://github.com/date-fns/date-fns/compare/v1.21.1...v1.22.0
[1.21.1]: https://github.com/date-fns/date-fns/compare/v1.21.0...v1.21.1
[1.21.0]: https://github.com/date-fns/date-fns/compare/v1.20.1...v1.21.0
[1.20.1]: https://github.com/date-fns/date-fns/compare/v1.20.0...v1.20.1
[1.20.0]: https://github.com/date-fns/date-fns/compare/v1.19.0...v1.20.0
[1.19.0]: https://github.com/date-fns/date-fns/compare/v1.18.0...v1.19.0
[1.18.0]: https://github.com/date-fns/date-fns/compare/v1.17.0...v1.18.0
[1.17.0]: https://github.com/date-fns/date-fns/compare/v1.16.0...v1.17.0
[1.16.0]: https://github.com/date-fns/date-fns/compare/v1.15.1...v1.16.0
[1.15.1]: https://github.com/date-fns/date-fns/compare/v1.15.0...v1.15.1
[1.15.0]: https://github.com/date-fns/date-fns/compare/v1.14.1...v1.15.0
[1.14.1]: https://github.com/date-fns/date-fns/compare/v1.14.0...v1.14.1
[1.14.0]: https://github.com/date-fns/date-fns/compare/v1.13.0...v1.14.0
[1.13.0]: https://github.com/date-fns/date-fns/compare/v1.12.1...v1.13.0
[1.12.1]: https://github.com/date-fns/date-fns/compare/v1.12.0...v1.12.1
[1.12.0]: https://github.com/date-fns/date-fns/compare/v1.11.2...v1.12.0
[1.11.2]: https://github.com/date-fns/date-fns/compare/v1.11.1...v1.11.2
[1.11.1]: https://github.com/date-fns/date-fns/compare/v1.11.0...v1.11.1
[1.11.0]: https://github.com/date-fns/date-fns/compare/v1.10.0...v1.11.0
[1.10.0]: https://github.com/date-fns/date-fns/compare/v1.9.0...v1.10.0
[1.9.0]: https://github.com/date-fns/date-fns/compare/v1.8.1...v1.9.0
[1.8.1]: https://github.com/date-fns/date-fns/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/date-fns/date-fns/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/date-fns/date-fns/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/date-fns/date-fns/compare/v1.5.2...v1.6.0
[1.5.2]: https://github.com/date-fns/date-fns/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/date-fns/date-fns/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/date-fns/date-fns/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/date-fns/date-fns/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/date-fns/date-fns/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/date-fns/date-fns/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/date-fns/date-fns/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/date-fns/date-fns/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/date-fns/date-fns/compare/v0.17.0...v1.0.0
[0.17.0]: https://github.com/date-fns/date-fns/compare/v0.16.0...v0.17.0
[0.16.0]: https://github.com/date-fns/date-fns/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/date-fns/date-fns/compare/v0.14.11...v0.15.0
[0.14.11]: https://github.com/date-fns/date-fns/compare/v0.14.10...v0.14.11
[0.14.10]: https://github.com/date-fns/date-fns/compare/v0.14.9...v0.14.10
[0.14.9]: https://github.com/date-fns/date-fns/compare/v0.14.8...v0.14.9
[0.14.8]: https://github.com/date-fns/date-fns/compare/v0.14.6...v0.14.8
[0.14.6]: https://github.com/date-fns/date-fns/compare/v0.14.0...v0.14.6
[0.14.0]: https://github.com/date-fns/date-fns/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/date-fns/date-fns/compare/v0.12.1...v0.13.0
[0.12.1]: https://github.com/date-fns/date-fns/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/date-fns/date-fns/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/date-fns/date-fns/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/date-fns/date-fns/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/date-fns/date-fns/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/date-fns/date-fns/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/date-fns/date-fns/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/date-fns/date-fns/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/date-fns/date-fns/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/date-fns/date-fns/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/date-fns/date-fns/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/date-fns/date-fns/compare/v0.1.0...v0.2.0
