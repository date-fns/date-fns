import { quartersInYear } from '../constants/index'

/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - number of years to be converted
 *
 * @returns the number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */
export default function yearsToQuarters(years: number): number {
  return Math.floor(years * quartersInYear)
}
