import toInteger from '../_lib/toInteger/index.js'
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index.js'

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}

var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/
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
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

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
  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var date = parseDate(parseYearResult.restDateString, parseYearResult.year)

  if (isNaN(date) || !date) {
    return new Date(NaN)
  }

  var timestamp = date.getTime()
  var time = 0
  var offset

  if (dateStrings.time) {
    time = parseTime(dateStrings.time)
    if (isNaN(time)) {
      return new Date(NaN)
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone)
    if (isNaN(offset)) {
      return new Date(NaN)
    }
  } else {
    var fullTime = timestamp + time
    var fullTimeDate = new Date(fullTime)

    offset = getTimezoneOffsetInMilliseconds(fullTimeDate)

    // Adjust time when it's coming from DST
    var fullTimeDateNextDay = new Date(fullTime)
    fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
    var offsetDiff =
      getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - offset
    if (offsetDiff > 0) {
      offset += offsetDiff
    }
  }

  return new Date(timestamp + time + offset)
}

function splitDateString(dateString) {
  var dateStrings = {}
  var array = dateString.split(patterns.dateTimeDelimiter)
  var timeString

  if (/:/.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0]
      timeString = dateString.substr(dateStrings.date.length, dateString.length)
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
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
    restDateString: dateString.slice((captures[1] || captures[2]).length)
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
  var week = parseDateUnit(captures[4]) - 1
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
    (hours % 24) * MILLISECONDS_IN_HOUR +
    minutes * MILLISECONDS_IN_MINUTE +
    seconds * 1000
  )
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(',', '.'))) || 0
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0

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
  var diff = (week || 0) * 7 + (day || 0) + 1 - fourthOfJanuaryDay
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
  return !(
    month < 0 ||
    month > 11 ||
    date < 1 ||
    date > (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  )
}

function validateDayOfYearDate(year, dayOfYear) {
  return !(dayOfYear < 1 || dayOfYear > (isLeapYearIndex(year) ? 366 : 365))
}

function validateWeekDate(_year, week, day) {
  return !(week < 0 || week > 52 || day < 0 || day > 6)
}

function validateTime(hours, minutes, seconds) {
  return !(
    seconds < 0 ||
    seconds >= 60 ||
    minutes < 0 ||
    minutes >= 60 ||
    hours < 0 ||
    hours >= 25
  )
}

function validateTimezone(_hours, minutes) {
  return !(minutes < 0 || minutes > 59)
}
