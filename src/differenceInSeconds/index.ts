import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
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
  options?: RoundingOptions
): number {
  requiredArgs(2, arguments)

  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1000
  return getRoundingMethod(options?.roundingMethod)(diff)
}
