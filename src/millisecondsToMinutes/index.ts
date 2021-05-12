import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInMinute } from '../constants/index'

export default function millisecondsToMinutes(milliseconds: number): number

/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a number of minutes.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 60000 milliseconds to minutes
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 */
export default function millisecondsToMinutes(milliseconds: number): number {
  requiredArgs(1, arguments)
  const minutes = milliseconds / millisecondsInMinute
  return Math.floor(minutes)
}
