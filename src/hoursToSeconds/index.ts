import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name hoursToSeconds
 * @category Common Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert hours number to seconds numbers.
 *
 * @param { number } hours - number of hours to be converted.
 *
 * @returns {number} the number of hours converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 2 hours to seconds
 * const result = hoursToSeconds(2)
 * //=> 7200
 */

export default function hoursToSeconds(hours: number): number {
  requiredArgs(1, arguments);
  return hours * 3600;
}
