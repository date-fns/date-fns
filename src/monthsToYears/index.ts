import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name monthsToYears
 * @category Common Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert number of months to years.
 *
 * @param { number } months - number of months to be converted.
 *
 * @returns {number} the number of months converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 40 months to years
 * const result = monthsToYears(40)
 * //=> 3
 */

export default function monthsToYears(months: number): number {
  requiredArgs(1, arguments);
  const years = months/12;
  return Math.floor(years);
}
