import requiredArgs from '../_lib/requiredArgs/index'

export default function yearsToQuarters(years: number): number

/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a number of quarters.
 *
 * @param { number } years - number of years to be converted.
 *
 * @returns {number} the number of years converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1 year to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */
export default function yearsToQuarters(years: number): number {
  requiredArgs(1, arguments)
  return years * 4
}
