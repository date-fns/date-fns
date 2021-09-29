import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - the given date
 * @returns the year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
export default function getYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  return toDate(dirtyDate).getFullYear()
}
