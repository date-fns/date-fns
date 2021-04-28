import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name hoursToMinutes
 * @category Common Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert hours number to minutes numbers.
 *
 * @param { number } hours - number of hours to be converted.
 *
 * @returns {number} the number of hours converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 2 hours to minutes
 * const result = hoursToMinutes(2)
 * //=> 120
 */

export default function hoursToMinutes(hours: number): number {
  requiredArgs(1, arguments);
  return hours*60;
}
