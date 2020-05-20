import { AdditionalDigitsOptions, AdditionaDigits } from 'src/types.js'

const MILLISECONDS_IN_HOUR = 3600000
const MILLISECONDS_IN_MINUTE = 60000
const DEFAULT_ADDITIONAL_DIGITS: AdditionaDigits = 2

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
}

const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/
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
 * @param argument - The value to convert
 * @param options - The options object
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
export default function parseISO(
  argument: string,
  options?: AdditionalDigitsOptions
) {
  const additionalDigits =
    options?.additionalDigits ?? DEFAULT_ADDITIONAL_DIGITS

  const dateStrings = splitDateString(argument)

  let date
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits)
    date = parseDate(parseYearResult.restDateString, parseYearResult.year)
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN)
  }

  const timestamp = date.getTime()
  let time: number | null = 0
  let offset

  if (dateStrings.time) {
    time = parseTime(dateStrings.time)
    if (time === null || isNaN(time)) {
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

type DateStringValues = {
  date?: null | string
  time?: string
  timezone?: string
}

function splitDateString(dateString: string) {
  const dateStrings: DateStringValues = {}
  const array = dateString.split(patterns.dateTimeDelimiter)
  let timeString

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

function parseYear(dateString: string, additionalDigits: AdditionaDigits) {
  const regex = new RegExp(
    '^(?:(\\d{4}|[+-]\\d{' +
      (4 + additionalDigits) +
      '})|(\\d{2}|[+-]\\d{' +
      (2 + additionalDigits) +
      '})$)'
  )

  const captures = dateString.match(regex)
  // Invalid ISO-formatted year
  if (!captures) return { year: null }

  const year = captures[1] && parseInt(captures[1])
  const century = captures[2] && parseInt(captures[2])

  return {
    year: typeof century == 'number' ? century * 100 : year,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  }
}

function parseDate(dateString: string | undefined, year: number | null | '') {
  // Invalid ISO-formatted year
  if (typeof year !== 'number') return null

  const captures = dateString?.match(dateRegex)
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
    const date = new Date(0)
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

function parseDateUnit(value: string | '') {
  return (value && parseInt(value || '1')) || 0
}

function parseTime(timeString: string) {
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

function parseTimeUnit(value: string | '') {
  return (value && parseFloat(value.replace(',', '.'))) || 0
}

function parseTimezone(timezoneString: string) {
  if (timezoneString === 'Z') return 0

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

function dayOfISOWeekYear(isoWeekYear: number, week: number, day: number) {
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

function isLeapYearIndex(year: number) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100)
}

function validateDate(year: number, month: number, date: number) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  )
}

function validateDayOfYearDate(year: number, dayOfYear: number) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365)
}

function validateWeekDate(_year: number, week: number, day: number) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6
}

function validateTime(hours: number, minutes: number, seconds: number) {
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

function validateTimezone(_hours: number, minutes: number) {
  return minutes >= 0 && minutes <= 59
}
