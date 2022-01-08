import { quartersInYear } from '../constants/index'

/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @param quarters - number of quarters to be converted
 *
 * @returns the number of quarters converted in years
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */
export default function quartersToYears(quarters: number): number {
  const years = quarters / quartersInYear
  return Math.floor(years)
}
