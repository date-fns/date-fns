import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds to one date from another.
 *
 * @description
 * Get the number of seconds to one date from another.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateTo - the target date
 * @param {Date|Number} dateFrom - the start date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds from dateFrom to dateTo
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
  options?: RoundingOptions
): number {
  requiredArgs(2, arguments)

  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1000
  return getRoundingMethod(options?.roundingMethod)(diff)
}
