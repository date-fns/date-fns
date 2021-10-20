import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/i
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
export default function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments)

  var options = dirtyOptions || {}

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : toInteger(options.additionalDigits)
  if (
    additionalDigits !== 2 &&
    additionalDigits !== 1 &&
    additionalDigits !== 0
  ) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  if (
    !(
      typeof argument === 'string' ||
      Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument)

  var date
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits)
    date = parseDate(parseYearResult.restDateString, parseYearResult.year)
  }

  if (isNaN(date) || !date) {
    return new Date(NaN)
  }

  var timestamp = date.getTime()
  var time = 0
  var offset

  if (dateStrings.time) {
    time = parseTime(dateStrings.time)
    if (isNaN(time) || time === null) {
      return new Date(NaN)
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone)
    if (isNaN(offset)) {
      return new Date(NaN)
    }
  } else {
    var dirtyDate = new Date(timestamp + time)
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0)
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate()
    )
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds()
    )
    return result
  }

  return new Date(timestamp + time + offset)
}

function splitDateString(dateString) {
  // Extract [date, time, offset]
  // where the time designator is T (case-insensitive) or space
  // and time and offset are optional.
  var dateStrings = {}
  var dateAndTime = dateString.match(/^([^T Z]+)([T ][^Z+-]+|)/i)
  if (dateAndTime) {
    dateStrings.date = dateAndTime[1]
    dateStrings.time = dateAndTime[2].slice(1)
    dateStrings.timezone = dateString.slice(dateAndTime[0].length)

    // Reject offset without time unless it is "Z"
    // (for backwards compatibility with input like "2021-10-19Z").
    if (!dateStrings.time && (dateStrings.timezone || 'Z').toUpperCase() !== 'Z') {
      return {}
    }
  }

  return dateStrings
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp(
    '^(?:(\\d{4}|[+-]\\d{' +
      (4 + additionalDigits) +
      '})|(\\d{2}|[+-]\\d{' +
      (2 + additionalDigits) +
      '})$)'
  )

  var captures = dateString.match(regex)
  // Invalid ISO-formatted year
  if (!captures) return { year: null }

  var year = captures[1] && parseInt(captures[1])
  var century = captures[2] && parseInt(captures[2])

  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  }
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null

  var captures = dateString.match(dateRegex)
  // Invalid ISO-formatted string
  if (!captures) return null

  var isWeekDate = !!captures[4]
  var dayOfYear = parseDateUnit(captures[1])
  var month = parseDateUnit(captures[2]) - 1
  var day = parseDateUnit(captures[3])
  var week = parseDateUnit(captures[4])
  var dayOfWeek = parseDateUnit(captures[5]) - 1

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }
    return dayOfISOWeekYear(year, week, dayOfWeek)
  } else {
    var date = new Date(0)
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN)
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day))
    return date
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex)
  if (!captures) return null // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1])
  var minutes = parseTimeUnit(captures[2])
  var seconds = parseTimeUnit(captures[3])

  if (!validateTime(hours, minutes, seconds)) {
    return NaN
  }

  return (
    hours * MILLISECONDS_IN_HOUR +
    minutes * MILLISECONDS_IN_MINUTE +
    seconds * 1000
  )
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(',', '.'))) || 0
}

function parseTimezone(timezoneString) {
  if (timezoneString.toUpperCase() === 'Z') return 0

  var captures = timezoneString.match(timezoneRegex)
  if (!captures) return 0

  var sign = captures[1] === '+' ? -1 : 1
  var hours = parseInt(captures[2])
  var minutes = (captures[3] && parseInt(captures[3])) || 0

  if (!validateTimezone(hours, minutes)) {
    return NaN
  }

  return (
    sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE)
  )
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0)
  date.setUTCFullYear(isoWeekYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100)
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  )
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365)
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  )
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59
}
