import toDate from '../toDate/index.js'
import endOfDay from '../endOfDay/index.js'
import endOfMonth from '../endOfMonth/index.js'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is the last day of a month
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  return endOfDay(date, dirtyOptions).getTime() === endOfMonth(date, dirtyOptions).getTime()
}
