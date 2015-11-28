# Changelog

## v1.0.0

* Additions:
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
  - `isValidDateValues`
  - `isWednesday`
  - `isYesterday`
  - `lastDayOfISOWeek`
  - `lastDayOfISOYear`
  - `startOfISOWeek`
  - `startOfToday`
  - `startOfTomorrow`
  - `startOfYesterday`
  - `subISOYears`
* Improvements:
  - Remove function `getTimeSinceMidnight` that was used inside of the other functions
  - Convert tests from Chai to power-assert allowing them to run in IE8
  - `differenceInDays` now returns the number of full days instead of calendar days
  - Add `Qo`, `W`, `Wo`, `WW`, `GG`, `GGGG`, `Z`, `ZZ`, `X`, `x` keys to `format`
  - Faster `isLeapYear`
  - `eachDay` and `isWithinRange` now throws an exception when given range boundaries are invalid
  - `parse` now parses years more than 99 AD and less than 1 AD
  - Make the documentation more verbose
  - All functions that had `weekStartsAt` as last argument, now have `options` argument instead
    which is an object with `options.weekStartsAt` property
* Bug fixes:
  - `format` now returns the correct result for key `E`
  - Prevent `startOf...`, `endOf...` and `lastDayOf...` functions
    to return dates with incorrect time when date is modifying into the other time zone
  - `parse` now parses years from 1 AD to 99 AD correctly

## v0.17.0 (29 Sep 2015)

* Additions:
  - `differenceInDays`
  - `getTimeSinceMidnight`
* Improvements:
  - `setISOWeek` now keeps time from original date
  - Reuse `getDaysInMonth` inside of `addMonths`
  - Complete UMD package (for Bower)
* Bug fixes:
  - Fix a lot of bugs appearing when date is modifying into other time zone
    (e.g., when adding months and original date is in DST but new date is not)
  - Prevent instances of Date to lose milliseconds value when passed to
    `parse` in IE10

## v0.16.0 (1 Sep 2015)

* Additions:
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
* Improvements:
  - Reuse `getDaysInMonth` inside of `setMonth`
  - `format` now has new format key `aa`, which returns `a.m.`/`p.m.` as opposed to `a` that returns `am`/`pm`
  - `parse` now fallbacks to `new Date` when argument is not an ISO formatted date
  - Use `parse` to clean date arguments in all functions

## v0.15.0 (26 Aug 2015)

* Additions:
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
* Improvements:
  - `format` now returns `a.m.`/`p.m.` instead of `am`/`pm`
  - `setMonth` now sets last day of month if original date was last day of longer month
  - Fix code style according to ESLint
  - Make tests run through all time zones

## v0.14.11 (21 Aug 2015)

* Improvements:
  - `setIsoWeek` now sets time to the start of the day
  - `format` now uses `parse` to avoid time zone bugs

## v0.14.10 (29 Jul 2015)

* Additions:
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
* Bug fixes:
  - `format` now behaves correctly with 12:00 am
  - `format` now behaves correctly with ordinal numbers

## v0.14.9 (14 Jan 2015)

* Bug fixes:
  - `addMonths` now correctly behaves with febrary (see [#18](https://github.com/js-fns/date-fns/pull/18))

## v0.14.8 (25 Dec 2014)

* Bug fixes:
  - `format` function now behaves correctly with `pm`/`am`

## v0.14.6 (4 Dec 2014)

* Bug fixes:
  - Fix broken Bower support

## v0.14.0 (5 Nov 2014)

* Additions:
  - Bower package

## v0.13.0 (22 Oct 2014)

* Additions:
  - `addMinutes`
  - `subMinutes`
  - `isEqual`
  - `isBefore`
  - `isAfter`

## v0.12.1 (19 Oct 2014)

* Bug fixes:
  - Incorrect rounding in `DDD` formatter

## v0.12.0 (15 Oct 2014)

* Additions:
  - `isSameYear`

## v0.11.0 (15 Oct 2014)

* Additions:
  - `isWithinRange`

## v0.10.0 (13 Oct 2014)

* Additions:
  - `format`
  - `startOfYear`

## v0.9.0 (10 Oct 2014)

* Additions:
  - `isFuture`
* Improvements:
  - Simplify `isWeekend`

## v0.8.0 (9 Oct 2014)

* Additions:
  - `addMonths`
  - `subMonths`
  - `setMonth`
  - `setYear`
* Improvements:
  - Reuse `addDays` inside of `subDays`

## v0.7.0 (8 Oct 2014)

* Additions:
  - `isSameWeek`

## v0.6.0 (7 Oct 2014)

* Additions:
  - `isFirstDayOfMonth`
  - `isLastDayOfMonth`
  - `isSameMonth`
* Bug fixes:
  - Inconsistent behavior of `endOfMonth`

## v0.5.0 (7 Oct 2014)

* Additions:
  - `addDays`
  - `subDays`

## v0.4.0 (7 Oct 2014)

* Additions:
  - `startOfWeek`
  - `endOfWeek`
  - `eachDay`

## v0.3.0 (6 Oct 2014)

* Additions:
  - `endOfDay`
  - `startOfMonth`
  - `endOfMonth`
* Improvements:
  - `startOfDay` now sets milliseconds as well

## v0.2.0 (6 Oct 2014)

* Additions:
  - `isToday`
  - `isWeekend`

## v0.1.0 (6 Oct 2014)

* Additions:
  - `startOfDay`

