import addYears from '../addYears'
import startOfYear from '../startOfYear'
import { YearStartOptions } from '../types'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import subDays from '../subDays'

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11} [options.yearStartsOn=0] - the index of the first month of the year (0 - January)
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 *
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00), { yearStartsOn: 4 })
 * //=> Thu Apr 30 2015 23:59:59.999
 */
export default function endOfYear(dirtyDate: Date | number, options?: YearStartOptions): Date {
  requiredArgs(1, arguments)

  let date = toDate(dirtyDate)
  const year = date.getFullYear()

  if (typeof options?.yearStartsOn === 'number') {
    date = startOfYear(date, options)
    date = addYears(date, 1)
    date = subDays(date, 1)
    date.setHours(23, 59, 59, 999)
  } else {
    date.setFullYear(year + 1, 0, 0)
    date.setHours(23, 59, 59, 999)
  }

  return date
}
