import requiredArgs from '../_lib/requiredArgs/index'
import { monthsInYear } from '../constants/index'

/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param {number} years - number of years to be converted
 *
 * @returns {number} the number of years converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */
export default function yearsToMonths(years: number): number {
  requiredArgs(1, arguments)
  return Math.floor(years * monthsInYear)
}
