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
var isLastDayOfMonth = require('date-fns/src/is_last_day_of_month');
var date = new Date(2014, 1, 28);
console.log(isLastDayOfMonth(date));
//=> true
```

## API

Code is fully documented, checkout source for reference.

### Common helpers

* [`format`](./src/format.js) - format date
* [`isFuture`](./src/is_future.js) - is passed date is future?
* [`isEqual`](./src/is_equal.js) - is passed dates are equal?
* [`isBefore`](./src/is_before.js) - is first date is before second one?
* [`isAfter`](./src/is_after.js) - is first date is after second one?
* `parse` - TODO

### Range helpers

* [`isWithinRange`](./src/is_within_range.js) - is passed date is within range?

### Minutes helpers

* [`addMinutes`](./src/add_minutes.js) - add minutes to passed date.
* [`subMinutes`](./src/sub_minutes.js) - substracts minutes from passed date.

### Day helpers

* [`isWeekend`](./src/is_weekend.js) - is passed date is weekend?
* [`isToday`](./src/is_today.js) - is passed date is today?
* [`startOfDay`](./src/start_of_day.js) - returns start of a day for passed date
* [`endOfDay`](./src/end_of_day.js) - returns end of a day for passed date
* [`addDays`](./src/add_days.js) - add specified number of days to passed date
* [`subDays`](./src/sub_days.js) - substract specified number of days from passed date
* [`eachDay`](./src/each_day.js) - returns array of dates within specified range

### Week helpers

* [`startOfWeek`](./src/start_of_week.js) - returns start of a week for passed date
* [`endOfWeek`](./src/end_of_week.js) - returns end of a week for passed date
* [`isSameWeek`](./src/is_same_week.js) - returns true if passed dates belongs to the same week

### Month helpers

* [`startOfMonth`](./src/start_of_month.js) - returns start of a month for passed date
* [`endOfMonth`](./src/end_of_month.js) - returns end of a month for passed date
* [`addMonths`](./src/add_months.js) - add specified number of months to passed date
* [`subMonths`](./src/sub_months.js) - substract specified number of days from passed date
* [`isSameMonth`](./src/is_same_month.js) - returns true if passed dates has same month (and year)
* [`isFirstDayOfMonth`](./src/is_first_day_of_month.js) - return true if passed date is first day of month
* [`isLastDayOfMonth`](./src/is_last_day_of_month.js) - return true if passed date is last day of month
* [`setMonth`](./src/set_month.js) - sets month index

### Year helpers

* [`setYear`](./src/set_year.js) - sets full year
* [`isSameYear`](./src/is_same_year.js) - is passed dates has the same year?

### I18n

TODO

