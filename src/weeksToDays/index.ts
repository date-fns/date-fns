import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name weeksToDays
 * @category Common Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert weeks number to days numbers.
 *
 * @param { number } weeks - number of days to be converted.
 *
 * @returns {number} the number of weeks converted in days
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */

export default function weeksToDays(weeks: number): number {
  requiredArgs(1, arguments);
  return weeks*7;
}
