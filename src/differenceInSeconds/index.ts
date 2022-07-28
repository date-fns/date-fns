import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * The {@link differenceInSeconds} function options.
 */
export interface DifferenceInSecondsOptions extends RoundingOptions {}

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
export default function differenceInSeconds<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number,
  options?: DifferenceInSecondsOptions
): number {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / 1000
  return getRoundingMethod(options?.roundingMethod)(diff)
}
