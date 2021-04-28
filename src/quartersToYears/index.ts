import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name quartersToYears
 * @category Common Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert number of quarters to years.
 *
 * @param { number } quarters - number of quarters to be converted.
 *
 * @returns {number} the number of quarters converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 */

export default function quartersToYears(quarters: number): number {
  requiredArgs(1, arguments);
  const years = quarters/4;
  return Math.floor(years);
}
