import toInteger from '../_lib/toInteger/index'
import requiredArgs from '../_lib/requiredArgs/index'

const MILLISECONDS_IN_HOUR = 3600000
const MILLISECONDS_IN_MINUTE = 60000
const DEFAULT_ADDITIONAL_DIGITS = 2

const patterns = {
  dateTimeDelimiter: /[T ]/i,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/i
}

const dateRegex = /^-?(?:(\d{3})|(\d{2}|\d{1})(?:-?(\d{2}|\d{1}))?|W(\d{2})(?:-?(\d{1}))?|)$/
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/

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
export default function parseISO(
  argument: string,
  dirtyOptions?: { additionalDigits: number | string }
): Date {
  requiredArgs(1, arguments)

  const options = dirtyOptions || ({} as { additionalDigits: number | string })

  const additionalDigits =
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

  const dateStrings = splitDateString(argument)

  let date: Date | null = null
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits)
    date = parseDate(parseYearResult.restDateString, parseYearResult.year)
  }

  if (!date) {
    return new Date(NaN)
  }

  const timestamp = date.getTime()
  let time: number | null = 0
  let offset: number

  if (dateStrings.time) {
    time = parseTime(dateStrings.time)
    if (time === null) {
      return new Date(NaN)
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone)
    if (isNaN(offset)) {
      return new Date(NaN)
    }
  } else {
    const dirtyDate = new Date(timestamp + time)
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    const result = new Date(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate(),
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds()
    )
    result.setFullYear(dirtyDate.getUTCFullYear())
    return result
  }
  return new Date(timestamp + time + offset)
}

interface DateObject {
  date?: string | null
  time?: string
  timezone?: string
}

function splitDateString(dateString: string): DateObject {
  const dateStrings = {} as DateObject
  const array = dateString.split(patterns.dateTimeDelimiter)
  let timeString

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings
  }

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
    const token = patterns.timezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

interface ParseYear {
  year: number
  restDateString: string
}

function parseYear(dateString: string, additionalDigits: number): ParseYear {
  const regex = new RegExp(
    '^(?:(\\d{4}|[+-]\\d{' +
      (4 + additionalDigits) +
      '})|(\\d{2}|[+-]\\d{' +
      (2 + additionalDigits) +
      '})$)'
  )

  const captures = dateString.match(regex)
  // Invalid ISO-formatted year
  if (!captures) return {} as ParseYear

  const year = parseInt(captures[1]) && parseInt(captures[1])
  const century = captures[2] ? parseInt(captures[2]) : null

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  }
}

function parseDate(dateString: string, year: number): Date | null {
  // Invalid ISO-formatted year
  if (year === null || year === undefined) return null

  const captures = dateString.match(dateRegex)
  // Invalid ISO-formatted string
  if (!captures) return null

  const isWeekDate = !!captures[4]
  const dayOfYear = parseDateUnit(captures[1])
  const month = parseDateUnit(captures[2]) - 1
  const day = parseDateUnit(captures[3])
  const week = parseDateUnit(captures[4])
  const dayOfWeek = parseDateUnit(captures[5]) - 1

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }
    return dayOfISOWeekYear(year, week, dayOfWeek)
  } else {
    let date = new Date(0)
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

function parseDateUnit(value: string): number {
  return value ? parseInt(value) : 1
}

function parseTime(timeString: string): number | null {
  const captures = timeString.match(timeRegex)
  if (!captures) return null // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1])
  const minutes = parseTimeUnit(captures[2])
  const seconds = parseTimeUnit(captures[3])

  if (!validateTime(hours, minutes, seconds)) {
    return NaN
  }

  return (
    hours * MILLISECONDS_IN_HOUR +
    minutes * MILLISECONDS_IN_MINUTE +
    seconds * 1000
  )
}

function parseTimeUnit(value: string): number {
  return (value && parseFloat(value.replace(',', '.'))) || 0
}

function parseTimezone(timezoneString: string): number {
  if (timezoneString === 'Z' || timezoneString === 'z') return 0

  const captures = timezoneString.match(timezoneRegex)
  if (!captures) return 0

  const sign = captures[1] === '+' ? -1 : 1
  const hours = parseInt(captures[2])
  const minutes = (captures[3] && parseInt(captures[3])) || 0

  if (!validateTimezone(hours, minutes)) {
    return NaN
  }

  return (
    sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE)
  )
}

function dayOfISOWeekYear(
  isoWeekYear: number,
  week: number,
  day: number
): Date {
  const date = new Date(0)
  date.setUTCFullYear(isoWeekYear, 0, 4)
  const fourthOfJanuaryDay = date.getUTCDay() || 7
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYearIndex(year: number): boolean {
  return Boolean(year % 400 === 0 || (year % 4 === 0 && year % 100))
}

function validateDate(year: number, month: number, date: number): boolean {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  )
}

function validateDayOfYearDate(year: number, dayOfYear: number): boolean {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365)
}

function validateWeekDate(_year: number, week: number, day: number): boolean {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6
}

function validateTime(
  hours: number,
  minutes: number,
  seconds: number
): boolean {
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

function validateTimezone(_hours: number, minutes: number): boolean {
  return minutes >= 0 && minutes <= 59
}
