import differenceInMilliseconds from '../differenceInMilliseconds/index'
import requiredArgs from '../_lib/requiredArgs/index'
import getRoundingFn from '../_lib/getRoundingFn/index'
import { RoundingMethod } from 'src/types'

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
export default function differenceInSeconds(
  dateLeft: Date | number,
  dateRight: Date | number,
  roundingMethod: RoundingMethod = 'floor'
): number {
  requiredArgs(2, arguments)

  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1000
  const roundingFn = getRoundingFn(roundingMethod)
  return roundingFn(diff)
}
