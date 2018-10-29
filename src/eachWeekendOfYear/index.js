import eachWeekendOfInterval from '../eachWeekendOfInterval/index.js'
import startOfYear from '../startOfYear/index.js'
import endOfYear from '../endOfYear/index.js'

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|String|Number} date - the given year
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 *   2020-01-03T23:00:00.000Z,
 *   2020-01-04T23:00:00.000Z,
 *   2020-01-10T23:00:00.000Z,
 *   ...
 *   2020-12-26T23:00:00.000Z
 * ]
 */
export default function eachWeekendOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var startDate = startOfYear(dirtyDate, dirtyOptions)
  var endDate = endOfYear(dirtyDate, dirtyOptions)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
