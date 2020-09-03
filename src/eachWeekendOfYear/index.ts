import eachWeekendOfInterval from '../eachWeekendOfInterval/index'
import startOfYear from '../startOfYear/index'
import endOfYear from '../endOfYear/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|Number} date - the given year
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
export default function eachWeekendOfYear(dirtyDate) {
  requiredArgs(1, arguments)

  var startDate = startOfYear(dirtyDate)
  // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'Date' is not assignable to param... Remove this comment to see the full error message
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid')

  var endDate = endOfYear(dirtyDate)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
