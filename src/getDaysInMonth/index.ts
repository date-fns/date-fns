import toDate from '../toDate/index'
import constructFrom from '../constructFrom/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export default function getDaysInMonth<DateType extends Date>(
  dirtyDate: DateType | number
): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const lastDayOfMonth = constructFrom(dirtyDate, 0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}
