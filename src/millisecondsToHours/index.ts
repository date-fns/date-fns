import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name millisecondsToHours
 * @category Common Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert milliseconds number to hours numbers.
 *
 * @param { number } milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 720000 milliseconds to hours
 * const result = millisecondsToHours(7200000)
 * //=> 2
 */

export default function millisecondsToHours(milliseconds: number): number {
  requiredArgs(1, arguments);
  // milliseconds in 1 hour => 3600000;
  const hours = milliseconds/3600000;
  return Math.floor(hours);
}
