import requiredArgs from '../_lib/requiredArgs/index'
import { secondsInHour } from '../constants/index'

/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */
export default function hoursToSeconds(hours: number): number {
  requiredArgs(1, arguments)
  return Math.floor(hours * secondsInHour)
}
