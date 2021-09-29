import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInHour } from '../constants/index'

/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param hours - number of hours to be converted
 *
 * @returns the number of hours converted to milliseconds
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */
export default function hoursToMilliseconds(hours: number): number {
  requiredArgs(1, arguments)
  return Math.floor(hours * millisecondsInHour)
}
