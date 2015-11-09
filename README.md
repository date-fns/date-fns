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

Code is fully documented, check the source for the reference.

### Common helpers

* [`format`](http://example.com/docs/format) - format the date.
* [`isFuture`](http://example.com/docs/isFuture) - is the given date in the future?
* [`isPast`](http://example.com/docs/isPast) - is the given date in the past?
* [`isEqual`](http://example.com/docs/isEqual) - are the given dates equal?
* [`isBefore`](http://example.com/docs/isBefore) - is the first date before the second one?
* [`isAfter`](http://example.com/docs/isAfter) - is the first date after the second one?
* [`compareAsc`](http://example.com/docs/compareAsc) - compare the two dates and return -1, 0 or 1.
* [`compareDesc`](http://example.com/docs/compareDesc) - compare the two dates reverse chronologically and return -1, 0 or 1.
* [`max`](http://example.com/docs/max) - return the latest of the given dates.
* [`min`](http://example.com/docs/min) - return the earliest of the given dates.
* [`closestTo`](http://example.com/docs/closestTo) - return a date from the array closest to the given date.
* [`parse`](http://example.com/docs/parse) - parse the ISO-8601-formatted date.
* [`isValid`](http://example.com/docs/isValid) - is the given date valid?
* [`isValidDateValues`](http://example.com/docs/isValidDateValues) - is the date constructed from the given values exist?
* [`distanceInWords`](http://example.com/docs/distanceInWords) - return the distance between the given dates in words.
* [`distanceInWordsToNow`](http://example.com/docs/distanceInWordsToNow) - return the distance between the given date and now in words.

### Range helpers

* [`isWithinRange`](http://example.com/docs/isWithinRange) - is the given date within the range?

### Milliseconds helpers

* [`getMilliseconds`](http://example.com/docs/getMilliseconds) - get the milliseconds.
* [`setMilliseconds`](http://example.com/docs/setMilliseconds) - set the milliseconds.
* [`addMilliseconds`](http://example.com/docs/addMilliseconds) - add the milliseconds to the given date.
* [`subMilliseconds`](http://example.com/docs/subMilliseconds) - subtract the milliseconds from the given date.
* [`differenceInMilliseconds`](http://example.com/docs/differenceInMilliseconds) - get the number of milliseconds between the given dates.

### Seconds helpers

* [`getSeconds`](http://example.com/docs/getSeconds) - get the seconds.
* [`setSeconds`](http://example.com/docs/setSeconds) - set the seconds.
* [`startOfSecond`](http://example.com/docs/startOfSecond) - return the start of a second for the given date.
* [`endOfSecond`](http://example.com/docs/endOfSecond) - return the end of a second for the given date.
* [`addSeconds`](http://example.com/docs/addSeconds) - add the seconds to the given date.
* [`subSeconds`](http://example.com/docs/subSeconds) - subtract the seconds from the given date.
* [`differenceInSeconds`](http://example.com/docs/differenceInSeconds) - get the number of seconds between the given dates.
* [`isSameSecond`](http://example.com/docs/isSameSecond) - are the given dates in the same second?
* [`isThisSecond`](http://example.com/docs/isThisSecond) - is the given date in the same second as the current date?

### Minutes helpers

* [`getMinutes`](http://example.com/docs/getMinutes) - get the minutes.
* [`setMinutes`](http://example.com/docs/setMinutes) - set the minutes.
* [`startOfMinute`](http://example.com/docs/startOfMinute) - return the start of a minute for the given date.
* [`endOfMinute`](http://example.com/docs/endOfMinute) - return the end of a minute for the given date.
* [`addMinutes`](http://example.com/docs/addMinutes) - add the minutes to the given date.
* [`subMinutes`](http://example.com/docs/subMinutes) - subtract the minutes from the given date.
* [`differenceInMinutes`](http://example.com/docs/differenceInMinutes) - get the number of minutes between the given dates.
* [`isSameMinute`](http://example.com/docs/isSameMinute) - are the given dates in the same minute?
* [`isThisMinute`](http://example.com/docs/isThisMinute) - is the given date in the same minute as the current date?

### Hours helpers

* [`getHours`](http://example.com/docs/getHours) - get the hours.
* [`setHours`](http://example.com/docs/setHours) - set the hours.
* [`startOfHour`](http://example.com/docs/startOfHour) - return the start of an hour for the given date.
* [`endOfHour`](http://example.com/docs/endOfHour) - return the end of an hour for the given date.
* [`addHours`](http://example.com/docs/addHours) - add hours to the given date.
* [`subHours`](http://example.com/docs/subHours) - subtract hours from the given date.
* [`differenceInHours`](http://example.com/docs/differenceInHours) - get the number of hours between the given dates.
* [`isSameHour`](http://example.com/docs/isSameHour) - are the given dates in the same hour?
* [`isThisHour`](http://example.com/docs/isThisHour) - is the given date in the same hour as the current date?

### Day helpers

* [`getDate`](http://example.com/docs/getDate) - get the day of the month.
* [`setDate`](http://example.com/docs/setDate) - set the day of the month.
* [`getDayOfYear`](http://example.com/docs/getDayOfYear) - get the day of the year.
* [`setDayOfYear`](http://example.com/docs/setDayOfYear) - set the day of the year.
* [`startOfDay`](http://example.com/docs/startOfDay) - return the start of a day for the given date.
* [`endOfDay`](http://example.com/docs/endOfDay) - return the end of a day for the given date.
* [`startOfYesterday`](http://example.com/docs/startOfYesterday) - return the start of yesterday.
* [`endOfYesterday`](http://example.com/docs/endOfYesterday) - return the end of yesterday.
* [`startOfToday`](http://example.com/docs/startOfToday) - return the start of today.
* [`endOfToday`](http://example.com/docs/endOfToday) - return the end of today.
* [`startOfTomorrow`](http://example.com/docs/startOfTomorrow) - return the start of tomorrow.
* [`endOfTomorrow`](http://example.com/docs/endOfTomorrow) - return the end of tomorrow.
* [`addDays`](http://example.com/docs/addDays) - add the specified number of days to the given date.
* [`subDays`](http://example.com/docs/subDays) - subtract the specified number of days from the given date.
* [`differenceInDays`](http://example.com/docs/differenceInDays) - get the number of full days between the given dates.
* [`differenceInCalendarDays`](http://example.com/docs/differenceInCalendarDays) - get the number of calendar days between the given dates.
* [`isSameDay`](http://example.com/docs/isSameDay) - are the given dates in the same day?
* [`isYesterday`](http://example.com/docs/isYesterday) - is the given date yesterday?
* [`isToday`](http://example.com/docs/isToday) - is the given date today?
* [`isTomorrow`](http://example.com/docs/isTomorrow) - is the given date tomorrow?
* [`eachDay`](http://example.com/docs/eachDay) - return the array of dates within the specified range.

### Weekday helpers

* [`getDay`](http://example.com/docs/getDay) - get the day of the week.
* [`setDay`](http://example.com/docs/setDay) - set the day of the week.
* [`isWeekend`](http://example.com/docs/isWeekend) - is the given date in a weekend?
* [`isSunday`](http://example.com/docs/isSunday) - is the given date Sunday?
* [`isMonday`](http://example.com/docs/isMonday) - is the given date Monday?
* [`isTuesday`](http://example.com/docs/isTuesday) - is the given date Tuesday?
* [`isWednesday`](http://example.com/docs/isWednesday) - is the given date Wednesday?
* [`isThursday`](http://example.com/docs/isThursday) - is the given date Thursday?
* [`isFriday`](http://example.com/docs/isFriday) - is the given date Friday?
* [`isSaturday`](http://example.com/docs/isSaturday) - is the given date Saturday?

### Week helpers

* [`startOfWeek`](http://example.com/docs/startOfWeek) - return the start of a week for the given date.
* [`endOfWeek`](http://example.com/docs/endOfWeek) - return the end of a week for the given date.
* [`lastDayOfWeek`](http://example.com/docs/lastDayOfWeek) - return the last day of a week for the given date.
* [`addWeeks`](http://example.com/docs/addWeeks) - add specified number of weeks to the given date.
* [`subWeeks`](http://example.com/docs/subWeeks) - subtract specified number of weeks from the given date.
* [`differenceInWeeks`](http://example.com/docs/differenceInWeeks) - get the number of full weeks between the given dates.
* [`differenceInCalendarWeeks`](http://example.com/docs/differenceInCalendarWeeks) - get the number of calendar weeks between the given dates.
* [`isSameWeek`](http://example.com/docs/isSameWeek) - are the given dates in the same week?
* [`isThisWeek`](http://example.com/docs/isThisWeek) - is the given date in the same week as the current date?

### [ISO week](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOWeek`](http://example.com/docs/getISOWeek) - get the ISO week.
* [`setISOWeek`](http://example.com/docs/setISOWeek) - set the ISO week.
* [`startOfISOWeek`](http://example.com/docs/startOfISOWeek) - return the start of an ISO week for the given date.
* [`endOfISOWeek`](http://example.com/docs/endOfISOWeek) - return the end of an ISO week for the given date.
* [`lastDayOfISOWeek`](http://example.com/docs/lastDayOfISOWeek) - return the last day of an ISO week for the given date.
* [`differenceInCalendarISOWeeks`](http://example.com/docs/differenceInCalendarISOWeeks) - get the number of calendar ISO weeks between the given dates.
* [`isSameISOWeek`](http://example.com/docs/isSameISOWeek) - are the given dates in the same ISO week?
* [`isThisISOWeek`](http://example.com/docs/isThisISOWeek) - is the given date in the same ISO week as the current date?

### Month helpers

* [`getMonth`](http://example.com/docs/getMonth) - get the month.
* [`setMonth`](http://example.com/docs/setMonth) - set the month.
* [`startOfMonth`](http://example.com/docs/startOfMonth) - return the start of a month for the given date.
* [`endOfMonth`](http://example.com/docs/endOfMonth) - return the end of a month for the given date.
* [`lastDayOfMonth`](http://example.com/docs/lastDayOfMonth) - return the last day of a month for the given date.
* [`addMonths`](http://example.com/docs/addMonths) - add the specified number of months to the given date.
* [`subMonths`](http://example.com/docs/subMonths) - subtract the specified number of months from the given date.
* [`differenceInMonths`](http://example.com/docs/differenceInMonths) - get the number of full months between the given dates.
* [`differenceInCalendarMonths`](http://example.com/docs/differenceInCalendarMonths) - get the number of calendar months between the given dates.
* [`isSameMonth`](http://example.com/docs/isSameMonth) - are the given dates in the same month?
* [`isThisMonth`](http://example.com/docs/isThisMonth) - is the given date in the same month as the current date?
* [`isFirstDayOfMonth`](http://example.com/docs/isFirstDayOfMonth) - is the given date the first day of a month?
* [`isLastDayOfMonth`](http://example.com/docs/isLastDayOfMonth) - is the given date the last day of a month?
* [`getDaysInMonth`](http://example.com/docs/getDaysInMonth) - get the number of days in a month of the given date.

### Quarter helpers

* [`getQuarter`](http://example.com/docs/getQuarter) - get the year quarter.
* [`setQuarter`](http://example.com/docs/setQuarter) - set the year quarter.
* [`startOfQuarter`](http://example.com/docs/startOfQuarter) - return the start of a year quarter for the given date.
* [`endOfQuarter`](http://example.com/docs/endOfQuarter) - return the end of a year quarter for the given date.
* [`lastDayOfQuarter`](http://example.com/docs/lastDayOfQuarter) - return the last day of a year quarter for the given date.
* [`addQuarters`](http://example.com/docs/addQuarters) - add the specified number of year quarters to the given date.
* [`subQuarters`](http://example.com/docs/subQuarters) - subtract the specified number of year quarters from the given date.
* [`differenceInQuarters`](http://example.com/docs/differenceInQuarters) - get the number of full quarters between the given dates.
* [`differenceInCalendarQuarters`](http://example.com/docs/differenceInCalendarQuarters) - get the number of calendar quarters between the given dates.
* [`isSameQuarter`](http://example.com/docs/isSameQuarter) - are the given dates in the same year quarter?
* [`isThisQuarter`](http://example.com/docs/isThisQuarter) - is the given date in the same quarter as the current date?

### Year helpers

* [`getYear`](http://example.com/docs/getYear) - get the year.
* [`setYear`](http://example.com/docs/setYear) - set the year.
* [`startOfYear`](http://example.com/docs/startOfYear) - return the start of a year for the given date.
* [`endOfYear`](http://example.com/docs/endOfYear) - return the end of a year for the given date.
* [`lastDayOfYear`](http://example.com/docs/lastDayOfYear) - return the last day of a year for the given date.
* [`addYears`](http://example.com/docs/addYears) - add the specified number of years to the given date.
* [`subYears`](http://example.com/docs/subYears) - subtract the specified number of years from the given date.
* [`differenceInYears`](http://example.com/docs/differenceInYears) - get the number of full years between the given dates.
* [`differenceInCalendarYears`](http://example.com/docs/differenceInCalendarYears) - get the number of calendar years between the given dates.
* [`isSameYear`](http://example.com/docs/isSameYear) - are the given dates in the same year?
* [`isThisYear`](http://example.com/docs/isThisYear) - is the given date in the same year as the current date?
* [`isLeapYear`](http://example.com/docs/isLeapYear) - is the given date in the leap year?
* [`getDaysInYear`](http://example.com/docs/getDaysInYear) - get the number of days in a year of the given date.

### [ISO week-numbering year](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOYear`](http://example.com/docs/getISOYear) - get the ISO week-numbering year.
* [`setISOYear`](http://example.com/docs/setISOYear) - set the ISO week-numbering year.
* [`startOfISOYear`](http://example.com/docs/startOfISOYear) - return the start of an ISO week-numbering year for the given date.
* [`endOfISOYear`](http://example.com/docs/endOfISOYear) - return the end of an ISO week-numbering year for the given date.
* [`lastDayOfISOYear`](http://example.com/docs/lastDayOfISOYear) - return the last day of an ISO week-numbering year for the given date.
* [`addISOYears`](http://example.com/docs/addISOYears) - add the specified number of ISO week-numbering years to the given date.
* [`subISOYears`](http://example.com/docs/subISOYears) - subtract the specified number of ISO week-numbering years from the given date.
* [`differenceInISOYears`](http://example.com/docs/differenceInISOYears) - get the number of full ISO week-numbering years between the given dates.
* [`differenceInCalendarISOYears`](http://example.com/docs/differenceInCalendarISOYears) - get the number of calendar ISO week-numbering years between the given dates.
* [`isSameISOYear`](http://example.com/docs/isSameISOYear) - are the given dates in the same ISO week-numbering year?
* [`isThisISOYear`](http://example.com/docs/isThisISOYear) - is the given date in the same ISO week-numbering year as the current date?
* [`getISOWeeksInYear`](http://example.com/docs/getISOWeeksInYear) - get the number of weeks in the ISO week-numbering year.

### I18n

TODO

## Tests

Kudos to [SauceLabs](https://saucelabs.com/) for the provided
Automate API. Thereby we run cross-browser tests on every push!

