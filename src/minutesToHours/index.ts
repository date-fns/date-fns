import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name minutesToHours
 * @category Common Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert minutes number to hours numbers.
 *
 * @param { number } minutes - number of minutes to be converted.
 *
 * @returns {number} the number of minutes converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 140 minutes to hours
 * const result = minutesToHours(140)
 * //=> 2
 */

export default function minutesToHours(minutes: number): number {
  requiredArgs(1, arguments);
  const hours = minutes/60;
  return Math.floor(hours);
}
