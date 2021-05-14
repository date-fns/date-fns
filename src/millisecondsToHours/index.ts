import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInHour } from '../constants/index'

/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */
export default function millisecondsToHours(milliseconds: number): number {
  requiredArgs(1, arguments)
  const hours = milliseconds / millisecondsInHour
  return Math.floor(hours)
}
