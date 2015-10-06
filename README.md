# date-fns
[![Build Status](https://travis-ci.org/date-fns/date-fns.svg?branch=master)](https://travis-ci.org/date-fns/date-fns)

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
var isLastDayOfMonth = require('date-fns/src/is_last_day_of_month')
var date = new Date(2014, 1, 28)
console.log(isLastDayOfMonth(date))
//=> true
```

## API

Code is fully documented, check the source for the reference.

### Common helpers

* [`format`](./src/format.js) - format the date.
* [`isFuture`](./src/is_future.js) - is the given date in the future?
* [`isPast`](./src/is_future.js) - is the given date in the past?
* [`isEqual`](./src/is_equal.js) - are the given dates equal?
* [`isBefore`](./src/is_before.js) - is the first date before the second one?
* [`isAfter`](./src/is_after.js) - is the first date after the second one?
* [`compareAsc`](./src/compare_asc.js) - compare the two dates and return -1, 0 or 1.
* [`compareDesc`](./src/compare_desc.js) - compare the two dates reverse chronologically and return -1, 0 or 1.
* [`max`]('./src/max') - return the latest of the given dates.
* [`min`]('./src/min') - return the earliest of the given dates.
* [`parse`](./src/parse.js) - parse the ISO-8601-formatted date.
* [`isValid`](./src/is_valid.js) - is the given date valid?

### Range helpers

* [`isWithinRange`](./src/is_within_range.js) - is the given date within the range?

### Milliseconds helpers

* [`getMilliseconds`](./src/get_milliseconds.js) - get the seconds.
* [`setMilliseconds`](./src/set_milliseconds.js) - set the seconds.
* [`addMilliseconds`](./src/add_milliseconds.js) - add the milliseconds to the given date.
* [`subMilliseconds`](./src/sub_milliseconds.js) - subtract the milliseconds from the given date.

### Seconds helpers

* [`getSeconds`](./src/get_seconds.js) - get the seconds.
* [`setSeconds`](./src/set_seconds.js) - set the seconds.
* [`startOfSecond`](./src/start_of_second.js) - return the start of a second for the given date.
* [`endOfSecond`](./src/end_of_second.js) - return the end of a second for the given date.
* [`addSeconds`](./src/add_seconds.js) - add the seconds to the given date.
* [`subSeconds`](./src/sub_seconds.js) - subtract the seconds from the given date.
* [`isSameSecond`](./src/is_same_second.js) - are the given dates in the same second?

### Minutes helpers

* [`getMinutes`](./src/get_minutes.js) - get the minutes.
* [`setMinutes`](./src/set_minutes.js) - set the minutes.
* [`startOfMinute`](./src/start_of_minute.js) - return the start of a minute for the given date.
* [`endOfMinute`](./src/end_of_minute.js) - return the end of a minute for the given date.
* [`addMinutes`](./src/add_minutes.js) - add the minutes to the given date.
* [`subMinutes`](./src/sub_minutes.js) - subtract the minutes from the given date.
* [`isSameMinute`](./src/is_same_minute.js) - are the given dates in the same minute?

### Hours helpers

* [`getHours`](./src/get_hours.js) - get the hours.
* [`setHours`](./src/set_hours.js) - set the hours.
* [`startOfHour`](./src/start_of_hour.js) - return the start of an hour for the given date.
* [`endOfHour`](./src/end_of_hour.js) - return the end of an hour for the given date.
* [`addHours`](./src/add_hours.js) - add hours to the given date.
* [`subHours`](./src/sub_hours.js) - subtract hours from the given date.
* [`isSameHour`](./src/is_same_hour.js) - are the given dates in the same hour?

### Day helpers

* [`getDate`](./src/get_date.js) - get the day of the month.
* [`setDate`](./src/set_date.js) - set the day of the month.
* [`getDay`](./src/get_day.js) - get the day of the week.
* [`setDay`](./src/set_day.js) - set the day of the week.
* [`getDayOfYear`](./src/get_day_of_year.js) - get the day of the year.
* [`setDayOfYear`](./src/set_day_of_year.js) - set the day of the year.
* [`startOfDay`](./src/start_of_day.js) - return the start of a day for the given date.
* [`endOfDay`](./src/end_of_day.js) - return the end of a day for the given date.
* [`addDays`](./src/add_days.js) - add the specified number of days to the given date.
* [`subDays`](./src/sub_days.js) - subtract the specified number of days from the given date.
* [`isSameDay`](./src/is_same_day.js) - are the given dates in the same day?
* [`isWeekend`](./src/is_weekend.js) - is the given date in a weekend?
* [`isYesterday`](./src/is_yesterday.js) - is the given date yesterday?
* [`isToday`](./src/is_today.js) - is the given date today?
* [`isTomorrow`](./src/is_tomorrow.js) - is the given date tomorrow?
* [`eachDay`](./src/each_day.js) - return the array of dates within the specified range.
* [`differenceInDays`](./src/difference_in_days.js) - return the number of full days between the given dates.

### Week helpers

* [`startOfWeek`](./src/start_of_week.js) - return the start of a week for the given date.
* [`endOfWeek`](./src/end_of_week.js) - return the end of a week for the given date.
* [`lastDayOfWeek`](./src/last_day_of_week.js) - return the last day of a week for the given date.
* [`addWeeks`](./src/add_weeks.js) - add specified number of weeks to the given date.
* [`subWeeks`](./src/sub_weeks.js) - subtract specified number of weeks from the given date.
* [`isSameWeek`](./src/is_same_week.js) - are the given dates in the same week?

### [ISO week](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOWeek`](./src/get_iso_week.js) - get the ISO week.
* [`setISOWeek`](./src/set_iso_week.js) - set the ISO week.
* [`startOfISOWeek`](./src/start_of_iso_week.js) - return the start of an ISO week for the given date.
* [`endOfISOWeek`](./src/end_of_iso_week.js) - return the end of an ISO week for the given date.
* [`lastDayOfISOWeek`](./src/last_day_of_iso_week.js) - return the last day of an ISO week for the given date.
* [`isSameISOWeek`](./src/is_same_iso_week.js) - are the given dates in the same ISO week?

### Month helpers

* [`getMonth`](./src/get_month.js) - get the month.
* [`setMonth`](./src/set_month.js) - set the month.
* [`startOfMonth`](./src/start_of_month.js) - return the start of a month for the given date.
* [`endOfMonth`](./src/end_of_month.js) - return the end of a month for the given date.
* [`lastDayOfMonth`](./src/last_day_of_month.js) - return the last day of a month for the given date.
* [`addMonths`](./src/add_months.js) - add the specified number of months to the given date.
* [`subMonths`](./src/sub_months.js) - subtract the specified number of months from the given date.
* [`isSameMonth`](./src/is_same_month.js) - are the given dates in the same month?
* [`isFirstDayOfMonth`](./src/is_first_day_of_month.js) - is the given date the first day of a month?
* [`isLastDayOfMonth`](./src/is_last_day_of_month.js) - is the given date the last day of a month?
* [`getDaysInMonth`](./src/get_days_in_month.js) - get the number of days in a month of the given date.

### Quarter helpers

* [`getQuarter`](./src/get_quarter.js) - get the year quarter.
* [`setQuarter`](./src/set_quarter.js) - set the year quarter.
* [`startOfQuarter`](./src/start_of_quarter.js) - return the start of a year quarter for the given date.
* [`endOfQuarter`](./src/end_of_quarter.js) - return the end of a year quarter for the given date.
* [`lastDayOfQuarter`](./src/last_day_of_quarter.js) - return the last day of a year quarter for the given date.
* [`addQuarters`](./src/add_quarters.js) - add the specified number of year quarters to the given date.
* [`subQuarters`](./src/sub_quarters.js) - subtract the specified number of year quarters from the given date.
* [`isSameQuarter`](./src/is_same_quarter.js) - are the given dates in the same year quarter?

### Year helpers

* [`getYear`](./src/set_year.js) - get the year.
* [`setYear`](./src/set_year.js) - set the year.
* [`startOfYear`](./src/start_of_year.js) - return the start of a year for the given date.
* [`endOfYear`](./src/end_of_year.js) - return the end of a year for the given date.
* [`lastDayOfYear`](./src/last_day_of_year.js) - return the last day of a year for the given date.
* [`addYears`](./src/add_years.js) - add the specified number of years to the given date.
* [`subYears`](./src/sub_years.js) - subtract the specified number of years from the given date.
* [`isSameYear`](./src/is_same_year.js) - are the given dates in the same year?
* [`isLeapYear`](./src/is_leap_year.js) - is the given date in the leap year?
* [`getDaysInYear`](./src/get_days_in_year.js) - get the number of days in a year of the given date.

### [ISO week-numbering year](http://en.wikipedia.org/wiki/ISO_week_date) helpers

* [`getISOYear`](./src/get_iso_year.js) - get the ISO week-numbering year.
* [`setISOYear`](./src/set_iso_year.js) - set the ISO week-numbering year.
* [`startOfISOYear`](./src/start_of_iso_year.js) - return the start of an ISO week-numbering year for the given date.
* [`endOfISOYear`](./src/end_of_iso_year.js) - return the end of an ISO week-numbering year for the given date.
* [`lastDayOfISOYear`](./src/last_day_of_iso_year.js) - return the last day of an ISO week-numbering year for the given date.
* [`addISOYears`](./src/add_iso_years.js) - add the specified number of ISO week-numbering years to the given date.
* [`subISOYears`](./src/sub_iso_years.js) - subtract the specified number of ISO week-numbering years from the given date.
* [`isSameISOYear`](./src/is_same_iso_year.js) - are the given dates in the same ISO week-numbering year?
* [`getISOWeeksInYear`]('./src/get_iso_weeks_in_year') - get the number of weeks in the ISO week-numbering year.

### I18n

TODO

## Tests

Kudos to [BrowserStack](https://www.browserstack.com) for the provided
Automate API. Thereby we run cross-browser tests on every push!

