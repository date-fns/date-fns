import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name minutesToMilliseconds
 * @category Common Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert minutes number to milliseconds numbers.
 *
 * @param { number } minutes - number of minutes to be converted.
 *
 * @returns {number} the number of minutes converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2) => 120000
 */

export default function minutesToMilliseconds(
  minutes: number,

): number {
  requiredArgs(1, arguments);

  const MILLISECONDS_IN_1MINUTE = 60000;

  return minutes * MILLISECONDS_IN_1MINUTE;

}
