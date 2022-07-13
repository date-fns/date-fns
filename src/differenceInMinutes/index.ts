import { millisecondsInMinute } from '../constants/index'
import differenceInMilliseconds from '../differenceInMilliseconds/index'
import requiredArgs from '../_lib/requiredArgs/index'
import {
  getRoundingMethod,
  RoundingOptions,
} from '../_lib/roundingMethods/index'

/**
 * The {@link differenceInMinutes} function options.
 */
export interface DifferenceInMinutesOptions extends RoundingOptions {}

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
export default function differenceInMinutes(
  dateLeft: Date | number,
  dateRight: Date | number,
  options?: DifferenceInMinutesOptions
): number {
  requiredArgs(2, arguments)

  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute
  return getRoundingMethod(options?.roundingMethod)(diff)
}
