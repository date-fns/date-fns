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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
export default function isLastDayOfMonth(dirtyDate: Date | number): boolean {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}
