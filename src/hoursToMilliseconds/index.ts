import requiredArgs from '../_lib/requiredArgs/index'

export default function hoursToMilliseconds(hours: number): number

/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a number of milliseconds .
 *
 * @param { number } hours - number of hours to be converted.
 *
 * @returns {number} the number of hours converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to milliseconds
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */
export default function hoursToMilliseconds(hours: number): number {
  requiredArgs(1, arguments)
  // milliseconds in 1 hour => 3600000;
  return hours * 3600000
}
