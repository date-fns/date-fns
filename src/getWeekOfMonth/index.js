import getDate from '../getDate/index.js'
import startOfMonth from '../startOfMonth/index.js'
import getDay from '../getDay/index.js'

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * var result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export default function getWeekOfMonth (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn)
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var startWeekDay = getDay(startOfMonth(dirtyDate, dirtyOptions), dirtyOptions)
  var currentWeekDay = getDay(dirtyDate, dirtyOptions)

  var startWeekDayWithOptions = startWeekDay < weekStartsOn ? 7 - weekStartsOn : startWeekDay
  var diff = startWeekDayWithOptions > currentWeekDay ? 7 - weekStartsOn : 0

  return Math.ceil((getDate(dirtyDate, dirtyOptions) + diff) / 7)
}
