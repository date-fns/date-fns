# date-fns
[![Build Status](https://travis-ci.org/date-fns/date-fns.svg?branch=master)](https://travis-ci.org/date-fns/date-fns) [![Docs Status](http://inch-ci.org/github/date-fns/date-fns.svg?branch=master)](http://inch-ci.org/github/date-fns/date-fns)

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

* [`format`](https://date-fns.org/docs/format) - format the date.
* [`isFuture`](https://date-fns.org/docs/isFuture) - is the given date in the future?
* [`isPast`](https://date-fns.org/docs/isPast) - is the given date in the past?
* [`isEqual`](https://date-fns.org/docs/isEqual) - are the given dates equal?
* [`isBefore`](https://date-fns.org/docs/isBefore) - is the first date before the second one?
* [`isAfter`](https://date-fns.org/docs/isAfter) - is the first date after the second one?
* [`compareAsc`](https://date-fns.org/docs/compareAsc) - compare the two dates and return -1, 0 or 1.
* [`compareDesc`](https://date-fns.org/docs/compareDesc) - compare the two dates reverse chronologically and return -1, 0 or 1.
* [`max`](https://date-fns.org/docs/max) - return the latest of the given dates.
* [`min`](https://date-fns.org/docs/min) - return the earliest of the given dates.
* [`closestTo`](https://date-fns.org/docs/closestTo) - return a date from the array closest to the given date.
* [`parse`](https://date-fns.org/docs/parse) - parse the ISO-8601-formatted date.
* [`isValid`](https://date-fns.org/docs/isValid) - is the given date valid?
* [`validateDateArguments`](https://date-fns.org/docs/validateDateArguments) - does the date constructed from the given arguments exist?
* [`distanceInWords`](https://date-fns.org/docs/distanceInWords) - return the distance between the given dates in words.
* [`distanceInWordsToNow`](https://date-fns.org/docs/distanceInWordsToNow) - return the distance between the given date and now in words.

### Range helpers

* [`isWithinRange`](https://date-fns.org/docs/isWithinRange) - is the given date within the range?

### Milliseconds helpers

* [`getMilliseconds`](https://date-fns.org/docs/getMilliseconds) - get the milliseconds.
* [`setMilliseconds`](https://date-fns.org/docs/setMilliseconds) - set the milliseconds.
* [`addMilliseconds`](https://date-fns.org/docs/addMilliseconds) - add the milliseconds to the given date.
* [`subMilliseconds`](https://date-fns.org/docs/subMilliseconds) - subtract the milliseconds from the given date.
* [`differenceInMilliseconds`](https://date-fns.org/docs/differenceInMilliseconds) - get the number of milliseconds between the given dates.

### Seconds helpers

* [`getSeconds`](https://date-fns.org/docs/getSeconds) - get the seconds.
* [`setSeconds`](https://date-fns.org/docs/setSeconds) - set the seconds.
* [`startOfSecond`](https://date-fns.org/docs/startOfSecond) - return the start of a second for the given date.
* [`endOfSecond`](https://date-fns.org/docs/endOfSecond) - return the end of a second for the given date.
* [`addSeconds`](https://date-fns.org/docs/addSeconds) - add the seconds to the given date.
* [`subSeconds`](https://date-fns.org/docs/subSeconds) - subtract the seconds from the given date.
* [`differenceInSeconds`](https://date-fns.org/docs/differenceInSeconds) - get the number of seconds between the given dates.
* [`isSameSecond`](https://date-fns.org/docs/isSameSecond) - are the given dates in the same second?
* [`isThisSecond`](https://date-fns.org/docs/isThisSecond) - is the given date in the same second as the current date?

### Minutes helpers

* [`getMinutes`](https://date-fns.org/docs/getMinutes) - get the minutes.
* [`setMinutes`](https://date-fns.org/docs/setMinutes) - set the minutes.
* [`startOfMinute`](https://date-fns.org/docs/startOfMinute) - return the start of a minute for the given date.
* [`endOfMinute`](https://date-fns.org/docs/endOfMinute) - return the end of a minute for the given date.
* [`addMinutes`](https://date-fns.org/docs/addMinutes) - add the minutes to the given date.
* [`subMinutes`](https://date-fns.org/docs/subMinutes) - subtract the minutes from the given date.
* [`differenceInMinutes`](https://date-fns.org/docs/differenceInMinutes) - get the number of minutes between the given dates.
* [`isSameMinute`](https://date-fns.org/docs/isSameMinute) - are the given dates in the same minute?
* [`isThisMinute`](https://date-fns.org/docs/isThisMinute) - is the given date in the same minute as the current date?

### Hours helpers

* [`getHours`](https://date-fns.org/docs/getHours) - get the hours.
* [`setHours`](https://date-fns.org/docs/setHours) - set the hours.
* [`startOfHour`](https://date-fns.org/docs/startOfHour) - return the start of an hour for the given date.
* [`endOfHour`](https://date-fns.org/docs/endOfHour) - return the end of an hour for the given date.
* [`addHours`](https://date-fns.org/docs/addHours) - add hours to the given date.
* [`subHours`](https://date-fns.org/docs/subHours) - subtract hours from the given date.
* [`differenceInHours`](https://date-fns.org/docs/differenceInHours) - get the number of hours between the given dates.
* [`isSameHour`](https://date-fns.org/docs/isSameHour) - are the given dates in the same hour?
* [`isThisHour`](https://date-fns.org/docs/isThisHour) - is the given date in the same hour as the current date?

### Day helpers

* [`getDate`](https://date-fns.org/docs/getDate) - get the day of the month.
* [`setDate`](https://date-fns.org/docs/setDate) - set the day of the month.
* [`getDayOfYear`](https://date-fns.org/docs/getDayOfYear) - get the day of the year.
* [`setDayOfYear`](https://date-fns.org/docs/setDayOfYear) - set the day of the year.
* [`startOfDay`](https://date-fns.org/docs/startOfDay) - return the start of a day for the given date.
* [`endOfDay`](https://date-fns.org/docs/endOfDay) - return the end of a day for the given date.
* [`startOfYesterday`](https://date-fns.org/docs/startOfYesterday) - return the start of yesterday.
* [`endOfYesterday`](https://date-fns.org/docs/endOfYesterday) - return the end of yesterday.
* [`startOfToday`](https://date-fns.org/docs/startOfToday) - return the start of today.
* [`endOfToday`](https://date-fns.org/docs/endOfToday) - return the end of today.
* [`startOfTomorrow`](https://date-fns.org/docs/startOfTomorrow) - return the start of tomorrow.
* [`endOfTomorrow`](https://date-fns.org/docs/endOfTomorrow) - return the end of tomorrow.
* [`addDays`](https://date-fns.org/docs/addDays) - add the specified number of days to the given date.
* [`subDays`](https://date-fns.org/docs/subDays) - subtract the specified number of days from the given date.
* [`differenceInDays`](https://date-fns.org/docs/differenceInDays) - get the number of full days between the given dates.
* [`differenceInCalendarDays`](https://date-fns.org/docs/differenceInCalendarDays) - get the number of calendar days between the given dates.
* [`isSameDay`](https://date-fns.org/docs/isSameDay) - are the given dates in the same day?
* [`isYesterday`](https://date-fns.org/docs/isYesterday) - is the given date yesterday?
* [`isToday`](https://date-fns.org/docs/isToday) - is the given date today?
* [`isTomorrow`](https://date-fns.org/docs/isTomorrow) - is the given date tomorrow?
* [`eachDay`](https://date-fns.org/docs/eachDay) - return the array of dates within the specified range.

### Weekday helpers

* [`getDay`](https://date-fns.org/docs/getDay) - get the day of the week.
* [`setDay`](https://date-fns.org/docs/setDay) - set the day of the week.
* [`isWeekend`](https://date-fns.org/docs/isWeekend) - is the given date in a weekend?
* [`isSunday`](https://date-fns.org/docs/isSunday) - is the given date Sunday?
* [`isMonday`](https://date-fns.org/docs/isMonday) - is the given date Monday?
* [`isTuesday`](https://date-fns.org/docs/isTuesday) - is the given date Tuesday?
* [`isWednesday`](https://date-fns.org/docs/isWednesday) - is the given date Wednesday?
* [`isThursday`](https://date-fns.org/docs/isThursday) - is the given date Thursday?
* [`isFriday`](https://date-fns.org/docs/isFriday) - is the given date Friday?
* [`isSaturday`](https://date-fns.org/docs/isSaturday) - is the given date Saturday?

### Week helpers

* [`startOfWeek`](https://date-fns.org/docs/startOfWeek) - return the start of a week for the given date.
* [`endOfWeek`](https://date-fns.org/docs/endOfWeek) - return the end of a week for the given date.
* [`lastDayOfWeek`](https://date-fns.org/docs/lastDayOfWeek) - return the last day of a week for the given date.
* [`addWeeks`](https://date-fns.org/docs/addWeeks) - add specified number of weeks to the given date.
* [`subWeeks`](https://date-fns.org/docs/subWeeks) - subtract specified number of weeks from the given date.
* [`differenceInWeeks`](https://date-fns.org/docs/differenceInWeeks) - get the number of full weeks between the given dates.
* [`differenceInCalendarWeeks`](https://date-fns.org/docs/differenceInCalendarWeeks) - get the number of calendar weeks between the given dates.
* [`isSameWeek`](https://date-fns.org/docs/isSameWeek) - are the given dates in the same week?
* [`isThisWeek`](https://date-fns.org/docs/isThisWeek) - is the given date in the same week as the current date?

### [ISO week](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOWeek`](https://date-fns.org/docs/getISOWeek) - get the ISO week.
* [`setISOWeek`](https://date-fns.org/docs/setISOWeek) - set the ISO week.
* [`startOfISOWeek`](https://date-fns.org/docs/startOfISOWeek) - return the start of an ISO week for the given date.
* [`endOfISOWeek`](https://date-fns.org/docs/endOfISOWeek) - return the end of an ISO week for the given date.
* [`lastDayOfISOWeek`](https://date-fns.org/docs/lastDayOfISOWeek) - return the last day of an ISO week for the given date.
* [`differenceInCalendarISOWeeks`](https://date-fns.org/docs/differenceInCalendarISOWeeks) - get the number of calendar ISO weeks between the given dates.
* [`isSameISOWeek`](https://date-fns.org/docs/isSameISOWeek) - are the given dates in the same ISO week?
* [`isThisISOWeek`](https://date-fns.org/docs/isThisISOWeek) - is the given date in the same ISO week as the current date?

### Month helpers

* [`getMonth`](https://date-fns.org/docs/getMonth) - get the month.
* [`setMonth`](https://date-fns.org/docs/setMonth) - set the month.
* [`startOfMonth`](https://date-fns.org/docs/startOfMonth) - return the start of a month for the given date.
* [`endOfMonth`](https://date-fns.org/docs/endOfMonth) - return the end of a month for the given date.
* [`lastDayOfMonth`](https://date-fns.org/docs/lastDayOfMonth) - return the last day of a month for the given date.
* [`addMonths`](https://date-fns.org/docs/addMonths) - add the specified number of months to the given date.
* [`subMonths`](https://date-fns.org/docs/subMonths) - subtract the specified number of months from the given date.
* [`differenceInMonths`](https://date-fns.org/docs/differenceInMonths) - get the number of full months between the given dates.
* [`differenceInCalendarMonths`](https://date-fns.org/docs/differenceInCalendarMonths) - get the number of calendar months between the given dates.
* [`isSameMonth`](https://date-fns.org/docs/isSameMonth) - are the given dates in the same month?
* [`isThisMonth`](https://date-fns.org/docs/isThisMonth) - is the given date in the same month as the current date?
* [`isFirstDayOfMonth`](https://date-fns.org/docs/isFirstDayOfMonth) - is the given date the first day of a month?
* [`isLastDayOfMonth`](https://date-fns.org/docs/isLastDayOfMonth) - is the given date the last day of a month?
* [`getDaysInMonth`](https://date-fns.org/docs/getDaysInMonth) - get the number of days in a month of the given date.

### Quarter helpers

* [`getQuarter`](https://date-fns.org/docs/getQuarter) - get the year quarter.
* [`setQuarter`](https://date-fns.org/docs/setQuarter) - set the year quarter.
* [`startOfQuarter`](https://date-fns.org/docs/startOfQuarter) - return the start of a year quarter for the given date.
* [`endOfQuarter`](https://date-fns.org/docs/endOfQuarter) - return the end of a year quarter for the given date.
* [`lastDayOfQuarter`](https://date-fns.org/docs/lastDayOfQuarter) - return the last day of a year quarter for the given date.
* [`addQuarters`](https://date-fns.org/docs/addQuarters) - add the specified number of year quarters to the given date.
* [`subQuarters`](https://date-fns.org/docs/subQuarters) - subtract the specified number of year quarters from the given date.
* [`differenceInQuarters`](https://date-fns.org/docs/differenceInQuarters) - get the number of full quarters between the given dates.
* [`differenceInCalendarQuarters`](https://date-fns.org/docs/differenceInCalendarQuarters) - get the number of calendar quarters between the given dates.
* [`isSameQuarter`](https://date-fns.org/docs/isSameQuarter) - are the given dates in the same year quarter?
* [`isThisQuarter`](https://date-fns.org/docs/isThisQuarter) - is the given date in the same quarter as the current date?

### Year helpers

* [`getYear`](https://date-fns.org/docs/getYear) - get the year.
* [`setYear`](https://date-fns.org/docs/setYear) - set the year.
* [`startOfYear`](https://date-fns.org/docs/startOfYear) - return the start of a year for the given date.
* [`endOfYear`](https://date-fns.org/docs/endOfYear) - return the end of a year for the given date.
* [`lastDayOfYear`](https://date-fns.org/docs/lastDayOfYear) - return the last day of a year for the given date.
* [`addYears`](https://date-fns.org/docs/addYears) - add the specified number of years to the given date.
* [`subYears`](https://date-fns.org/docs/subYears) - subtract the specified number of years from the given date.
* [`differenceInYears`](https://date-fns.org/docs/differenceInYears) - get the number of full years between the given dates.
* [`differenceInCalendarYears`](https://date-fns.org/docs/differenceInCalendarYears) - get the number of calendar years between the given dates.
* [`isSameYear`](https://date-fns.org/docs/isSameYear) - are the given dates in the same year?
* [`isThisYear`](https://date-fns.org/docs/isThisYear) - is the given date in the same year as the current date?
* [`isLeapYear`](https://date-fns.org/docs/isLeapYear) - is the given date in the leap year?
* [`getDaysInYear`](https://date-fns.org/docs/getDaysInYear) - get the number of days in a year of the given date.

### [ISO week-numbering year](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOYear`](https://date-fns.org/docs/getISOYear) - get the ISO week-numbering year.
* [`setISOYear`](https://date-fns.org/docs/setISOYear) - set the ISO week-numbering year.
* [`startOfISOYear`](https://date-fns.org/docs/startOfISOYear) - return the start of an ISO week-numbering year for the given date.
* [`endOfISOYear`](https://date-fns.org/docs/endOfISOYear) - return the end of an ISO week-numbering year for the given date.
* [`lastDayOfISOYear`](https://date-fns.org/docs/lastDayOfISOYear) - return the last day of an ISO week-numbering year for the given date.
* [`addISOYears`](https://date-fns.org/docs/addISOYears) - add the specified number of ISO week-numbering years to the given date.
* [`subISOYears`](https://date-fns.org/docs/subISOYears) - subtract the specified number of ISO week-numbering years from the given date.
* [`differenceInISOYears`](https://date-fns.org/docs/differenceInISOYears) - get the number of full ISO week-numbering years between the given dates.
* [`differenceInCalendarISOYears`](https://date-fns.org/docs/differenceInCalendarISOYears) - get the number of calendar ISO week-numbering years between the given dates.
* [`isSameISOYear`](https://date-fns.org/docs/isSameISOYear) - are the given dates in the same ISO week-numbering year?
* [`isThisISOYear`](https://date-fns.org/docs/isThisISOYear) - is the given date in the same ISO week-numbering year as the current date?
* [`getISOWeeksInYear`](https://date-fns.org/docs/getISOWeeksInYear) - get the number of weeks in the ISO week-numbering year.

### I18n

TODO

## Tests

Kudos to [SauceLabs](https://saucelabs.com/) for the provided
Automate API. Thereby we run cross-browser tests on every push!

