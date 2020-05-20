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
 * @param date - The given year
 * @returns an array containing all the Saturdays and Sundays
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
export default function eachWeekendOfYear(dirtyDate: Date | number)[] {
  const startDate = startOfYear(dirtyDate)
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid')

  const endDate = endOfYear(dirtyDate)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
