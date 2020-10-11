import toDate from '../toDate/index'
import startOfYear from '../startOfYear/index'
import differenceInCalendarDays from '../differenceInCalendarDays/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export default function getDayOfYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const diff = differenceInCalendarDays(date, startOfYear(date))
  const dayOfYear = diff + 1
  return dayOfYear
}
