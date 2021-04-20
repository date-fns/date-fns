import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name hoursToMilliseconds
 * @category Common Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert hours number to milliseconds numbers.
 *
 * @param { number } hours - number of hours to be converted.
 *
 * @returns {number} the number of hours converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 2 hours to milliseconds
 * const result = hoursToMilliseconds(2) => 7,200,000
 */

export default function hoursToMilliseconds(
  hours: number,

): number {
  requiredArgs(1, arguments);

  const MILLISECONDS_IN_1HOUR = 3600000;

  const milliseconds = hours * MILLISECONDS_IN_1HOUR;

  return milliseconds;
}
