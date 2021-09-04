import { RoundingMethod } from '../../src/types'
import { millisecondsInHour } from '../constants/index'
import differenceInMilliseconds from '../differenceInMilliseconds/index'
import requiredArgs from '../_lib/requiredArgs/index'
import {
  defaultRoundingMethod,
  getRoundingMethod,
} from '../_lib/roundingMethods/index'

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
export default function differenceInHours(
  dateLeft: Date | number,
  dateRight: Date | number,
  roundingMethod: RoundingMethod = defaultRoundingMethod
): number {
  requiredArgs(2, arguments)

  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour
  const roundingFn = getRoundingMethod(roundingMethod)
  return roundingFn(diff)
}
