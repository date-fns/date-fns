import { millisecondsInHour } from '../constants/index'
import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours to one date from another.
 *
 * @description
 * Get the number of hours to one date from another.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateTo - the target date
 * @param {Date|Number} dateFrom - the start date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours from dateFrom to dateTo
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
  options?: RoundingOptions
): number {
  requiredArgs(2, arguments)

  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour
  return getRoundingMethod(options?.roundingMethod)(diff)
}
