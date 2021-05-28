import requiredArgs from '../_lib/requiredArgs/index'
import { millisecondsInMinute } from '../constants/index'

/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */
export default function minutesToMilliseconds(minutes: number): number {
  requiredArgs(1, arguments)
  return Math.floor(minutes * millisecondsInMinute)
}
