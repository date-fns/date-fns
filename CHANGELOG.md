# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[Semantic Versioning]: http://semver.org/
[Keep a CHANGELOG]: http://keepachangelog.com/

## [Unreleased]

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

[Unreleased]: https://github.com/date-fns/date-fns/compare/v1.3.0...HEAD
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
