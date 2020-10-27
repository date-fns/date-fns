import { YearStartOptions } from '../types'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/*  diffToQuarterStartArray it is an array with the distances between the month that that position represents and the beginning of the quarter.
 with diffToQuarterStartArray you can find out the beginning of the quarter even though the beginning of the year is offset */
const diffToQuarterStartArray = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2]

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11} [options.yearStartsOn=0] - the index of the first month of the year (0 - January)
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 *
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0), { yearStartsOn: 2 })
 * //=> Mon Sep 01 2014 00:00:00
 */
export default function startOfQuarter(dirtyDate: Date | number, options?: YearStartOptions): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const currentMonth = date.getMonth()

  const month = currentMonth - diffToQuarterStartArray[currentMonth - (options?.yearStartsOn ?? 0)]

  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
