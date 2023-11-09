import { millisecondsInHour } from '../constants/index'
import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * The {@link differenceInHours} function options.
 */
export interface DifferenceInHoursOptions extends RoundingOptions {}

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
export default function differenceInHours<DateType extends Date>(
  dateLeft: DateType | number,
  dateRight: DateType | number,
  options?: DifferenceInHoursOptions
): number {
  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour
  return getRoundingMethod(options?.roundingMethod)(diff)
}
