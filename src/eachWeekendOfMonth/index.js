import eachWeekendOfInterval from '../eachWeekendOfInterval/index.js'
import startOfMonth from '../startOfMonth/index.js'
import endOfMonth from '../endOfMonth/index.js'

/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|String|Number} date - the given month
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * var result = eachWeekendOfMonth(new Date(2020, 1, 1))
 * //=> [
 *   2020-02-01T23:00:00.000Z,
 *   2020-02-07T23:00:00.000Z,
 *   2020-02-08T23:00:00.000Z,
 *   ...
 *   2020-02-28T23:00:00.000Z
 * ]
 */
export default function eachWeekendOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var startDate = startOfMonth(dirtyDate, dirtyOptions)
  var endDate = endOfMonth(dirtyDate, dirtyOptions)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
