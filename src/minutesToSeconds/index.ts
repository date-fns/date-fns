import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name minutesToSeconds
 * @category Common Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert minutes number to seconds numbers.
 *
 * @param { number } minutes - number of minutes to be converted.
 *
 * @returns {number} the number of minutes converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Converting 2 minutes to seconds
 * const result = minutesToSeconds(2) => 120
 */

export default function minutesToSeconds(
  minutes: number,

): number {
  requiredArgs(1, arguments);

  return minutes*60;
}
