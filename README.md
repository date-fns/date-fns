# date-fns
[![](http://img.shields.io/npm/v/date-fns.svg)](https://www.npmjs.org/package/date-fns)
[![Build Status](https://travis-ci.org/js-fns/date-fns.svg)](https://travis-ci.org/js-fns/date-fns)

Date helpers in function-per-file style.

## Installation

```
npm install --save date-fns
```

## Usage

``` javascript
var isLastDayOfMonth = require('date-fns/src/is_last_day_of_month')
var date = new Date(2014, 1, 28)
console.log(isLastDayOfMonth(date))
//=> true
```

## API

Code is fully documented, checkout source for reference.

### Common helpers

* [`format`](./src/format.js) - format date.
* [`isFuture`](./src/is_future.js) - is passed date future?
* [`isPast`](./src/is_future.js) - is passed date past?
* [`isEqual`](./src/is_equal.js) - are passed dates equal?
* [`isBefore`](./src/is_before.js) - is first date before second one?
* [`isAfter`](./src/is_after.js) - is first date after second one?
* [`compareAsc`](./src/compare_asc.js) - compares the two dates and returns -1, 0 or 1.
* [`compareDesc`](./src/compare_desc.js) - compares the two dates reverse chronologicaly and returns -1, 0 or 1.
* [`parse`](./src/parse.js) - parse ISO-8601-formatted date.

### Range helpers

* [`isWithinRange`](./src/is_within_range.js) - is passed date within range?

### Seconds helpers

* [`addSeconds`](./src/add_seconds.js) - add seconds to passed date.
* [`subSeconds`](./src/subseconds.js) - subtracts seconds from passed date.

### Minutes helpers

* [`addMinutes`](./src/add_minutes.js) - add minutes to passed date.
* [`subMinutes`](./src/sub_minutes.js) - subtracts minutes from passed date.

### Hours helpers
* [`startOfHour`](./src/start_of_hour.js) - returns start of an hour for passed date.
* [`endOfHour`](./src/end_of_hour.js) - returns end of an hour for passed date.
* [`addHours`](./src/add_hours.js) - add hours to passed date.
* [`subHours`](./src/sub_hours.js) - subtracts hours from passed date.

### Day helpers

* [`getDayOfYear`](./src/get_day_of_year.js) - returns day of year.
* [`setDayOfYear`](./src/set_day_of_year.js) - sets day of year.
* [`isWeekend`](./src/is_weekend.js) - is passed date weekend?
* [`isToday`](./src/is_today.js) - is passed date today?
* [`startOfDay`](./src/start_of_day.js) - returns start of a day for passed date.
* [`endOfDay`](./src/end_of_day.js) - returns end of a day for passed date.
* [`addDays`](./src/add_days.js) - add specified number of days to passed date.
* [`subDays`](./src/sub_days.js) - subtract specified number of days from passed date.
* [`eachDay`](./src/each_day.js) - returns array of dates within specified range.
* [`isSameDay`](./src/is_same_day.js) - are passed dates has the same day?

### Week helpers

* [`getISOWeek`](./src/get_iso_week.js) - returns ISO week index.
* [`setISOWeek`](./src/set_iso_week.js) - sets ISO week index.
* [`startOfWeek`](./src/start_of_week.js) - returns start of a week for passed date.
* [`endOfWeek`](./src/end_of_week.js) - returns end of a week for passed date.
* [`isSameWeek`](./src/is_same_week.js) - returns true if passed dates belongs to the same week.

### Month helpers

* [`startOfMonth`](./src/start_of_month.js) - returns start of a month for passed date.
* [`endOfMonth`](./src/end_of_month.js) - returns end of a month for passed date.
* [`addMonths`](./src/add_months.js) - add specified number of months to passed date.
* [`subMonths`](./src/sub_months.js) - subtract specified number of days from passed date.
* [`isSameMonth`](./src/is_same_month.js) - returns true if passed dates has same month (and year).
* [`isFirstDayOfMonth`](./src/is_first_day_of_month.js) - return true if passed date is first day of month.
* [`isLastDayOfMonth`](./src/is_last_day_of_month.js) - return true if passed date is last day of month.
* [`setMonth`](./src/set_month.js) - sets month index.

### Quarter helpers

* [`getQuarter`](./src/get_quarter.js) - returns year quarter.
* [`setQuarter`](./src/set_quarter.js) - sets year quarter.

### Year helpers

* [`getISOYear`](./src/get_iso_year.js) - returns ISO week-numbering year.
* [`setYear`](./src/set_year.js) - sets full year.
* [`setISOYear`](./src/set_iso_year.js) - sets ISO week-numbering year.
* [`isSameYear`](./src/is_same_year.js) - are passed dates has the same year?
* [`startOfYear`](./src/start_of_year.js) - returns start of year for passed date.
* [`startOfISOYear`](./src/start_of_iso_year.js) - returns start of ISO week-numbering year for passed date.

### I18n

TODO

