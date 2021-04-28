import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name monthsToQuarters
 * @category Common Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert number of months to quarters.
 *
 * @param { number } months - number of months to be converted.
 *
 * @returns {number} the number of months converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 6 months to quarters
 * const result = monthsToQuarters(6)
 * //=> 2
 */

export default function monthsToQuarters(months: number): number {
  requiredArgs(1, arguments);
  const quarters = months/3;
  return Math.floor(quarters);
}
