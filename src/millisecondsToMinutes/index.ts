import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInMinute } from '../constants/index'

/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param {number} milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */
export default function millisecondsToMinutes(milliseconds: number): number {
  requiredArgs(1, arguments)
  const minutes = milliseconds / millisecondsInMinute
  return Math.floor(minutes)
}
