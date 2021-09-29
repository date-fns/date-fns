import requiredArgs from '../_lib/requiredArgs/index'
import { minutesInHour } from '../constants/index'

/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param hours - number of hours to be converted
 *
 * @returns the number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */
export default function hoursToMinutes(hours: number): number {
  requiredArgs(1, arguments)
  return Math.floor(hours * minutesInHour)
}
