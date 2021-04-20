import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name yearsToQuarters
 * @category Common Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert number of years to quarters.
 *
 * @param { number } years - number of years to be converted.
 *
 * @returns {number} the number of years converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * //Convertinging 1 year to quarters
 * const result = yearsToQuarters(2) => 8
 */

export default function yearsToQuarters(years: number): number {
  requiredArgs(1, arguments);

  return years*4;
}
