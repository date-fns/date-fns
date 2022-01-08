import { millisecondsInHour } from '../constants/index'
import differenceInMilliseconds from '../differenceInMilliseconds/index'
import type { RoundingOptions } from '../types'
import { getRoundingMethod } from '../_lib/roundingMethods/index'

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @param options - an object with options.
 * @returns the number of hours
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
  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour
  return getRoundingMethod(options?.roundingMethod)(diff)
}
