import differenceInDays from '../differenceInDays/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * The {@link differenceInWeeks} function options.
 */
export interface DifferenceInWeeksOptions extends RoundingOptions {}

/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full weeks
 *
 * @example
 * // How many full weeks are between
 * // 11 June 2020 0:00 and 1 July 2020 0:00
 *
 * const result = differenceInWeeks(
 *   new Date(2020, 6, 1),
 *   new Date(2020, 5, 11)
 * )
 * //=> 2
 *
 * @example
 * // Take note of the order of parameters,
 * // Function can return a negative number
 * // With parameters reversed, how many full weeks are between
 * // 1 July 2020 0:00 and 11 June 2020 0:00
 *
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 11),
 *   new Date(2020, 6, 1)
 * )
 * //=> -2
 *
 */

export default function differenceInWeeks<DateType extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInWeeksOptions
): number {
  const diff = differenceInDays(dateLeft, dateRight) / 7
  return getRoundingMethod(options?.roundingMethod)(diff)
}
