import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name yearsToMonths
 * @category Common Helpers
 * @summary Convert year to months.
 *
 * @description
 * Convert years number to months numbers.
 *
 * @param { number } years - number of months to be converted.
 *
 * @returns {number} the number of years converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */

export default function yearsToMonths(years: number): number {
  requiredArgs(1, arguments);
  return years*12;
}
