import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export default function isLeapYear<DateType extends Date>(
  dirtyDate: DateType | number
): boolean {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
