import toDate from '../toDate/index.js'
import startOfWeek from '../startOfWeek/index.js'
import addDays from '../addDays/index.js'

/**
 * @name isFirstWeekInMonth
 * @category Week Helpers
 * @summary Is the given date the first week of a month?
 *
 * @description
 * Is the given date the first week of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is the first week of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 1 September 2017 the first week of a month?
 * var result = isFirstWeekInMonth(new Date(2017, 8, 1))
 * //=> true
 */
export default function isFirstWeekInMonth (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  const date = toDate(dirtyDate, dirtyOptions)
  return addDays(startOfWeek(date), 6).getDate() <= 7
}
