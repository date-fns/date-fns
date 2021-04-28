import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name quartersToMonths
 * @category Common Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert number of quarters to months.
 *
 * @param { number } quarters - number of quarters to be converted.
 *
 * @returns {number} the number of quarters converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */

export default function quartersToMonths(quarters: number): number {
  requiredArgs(1, arguments);
  return quarters*3;
}
