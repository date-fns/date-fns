import toDate from '../toDate/index'
import endOfDay from '../endOfDay/index'
import endOfMonth from '../endOfMonth/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth(dirtyDate: Date | number): boolean {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}
