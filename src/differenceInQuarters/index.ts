import differenceInMonths from '../differenceInMonths/index'
import type { RoundingOptions } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
export default function differenceInQuarters(
  dateLeft: Date | number,
  dateRight: Date | number,
  options?: RoundingOptions
): number {
  requiredArgs(2, arguments)

  const diff = differenceInMonths(dateLeft, dateRight) / 3
  return getRoundingMethod(options?.roundingMethod)(diff)
}
