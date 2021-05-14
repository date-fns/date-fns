import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInSecond } from '../constants/index'

/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
export default function millisecondsToSeconds(milliseconds: number): number {
  requiredArgs(1, arguments)
  const seconds = milliseconds / millisecondsInSecond
  return Math.floor(seconds)
}
