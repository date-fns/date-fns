import { YearStartOptions } from '../types'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import startOfYear from '../startOfYear'
import endOfYear from '../endOfYear'

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Date|Number} dateToCompare - the date to compare
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11} [options.yearStartsOn=0] - the index of the first month of the year (0 - January)
 * @returns {Boolean} the dates are in the same year
 * @throws {Error} month must be after the start of year param
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 2, 25), { yearStartsOn: 3 })
 * //=> false
 */
export default function isSameYear(
  dirtyDate: Date | number,
  dirtyDateToCompare: Date | number,
  options?: YearStartOptions
): boolean {
  requiredArgs(2, arguments)

  if (options && options?.yearStartsOn > toDate(dirtyDate).getMonth()) {
    throw Error('Month must be after the start of year param')
  }

  const startTime = startOfYear(dirtyDate, options).getTime()
  const endTime = endOfYear(dirtyDate, options).getTime()

  const time = toDate(dirtyDateToCompare).getTime()

  return time >= startTime && time <= endTime
}
