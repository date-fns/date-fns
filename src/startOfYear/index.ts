import { YearStartOptions } from '../types'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11} [options.yearStartsOn=0] - the index of the first month of the year (0 - January)
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 *
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00), { yearStartsOn: 3})
 * //=> Tue Apr 01 2014 00:00:00
 */
export default function startOfYear(dirtyDate: Date | number, options?: YearStartOptions ): Date {
  requiredArgs(1, arguments)

  const cleanDate = toDate(dirtyDate)
  const date = new Date(0)

  date.setFullYear(cleanDate.getFullYear(), options?.yearStartsOn ?? 0, 1)

  date.setHours(0, 0, 0, 0)
  return date
}
