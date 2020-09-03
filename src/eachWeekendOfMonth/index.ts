import eachWeekendOfInterval from '../eachWeekendOfInterval/index'
import startOfMonth from '../startOfMonth/index'
import endOfMonth from '../endOfMonth/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|Number} date - the given month
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * var result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */
export default function eachWeekendOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var startDate = startOfMonth(dirtyDate)
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid')

  var endDate = endOfMonth(dirtyDate)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
