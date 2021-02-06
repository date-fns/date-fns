import { YearStartOptions } from 'src/types'
import startOfQuarter from '../startOfQuarter/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11} [options.yearStartsOn=0] - the index of the first month of the year (0 - January)
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8), { yearStartsOn: 1 })
 * //=> false
 */
export default function isSameQuarter(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  options?: YearStartOptions
  ): boolean {
  requiredArgs(2, arguments)

  const dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft, options)
  const dateRightStartOfQuarter = startOfQuarter(dirtyDateRight, options)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}
