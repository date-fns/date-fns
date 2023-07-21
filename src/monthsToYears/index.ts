import { monthsInYear } from '../constants/index'

/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param months - number of months to be converted
 *
 * @returns the number of months converted in years
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */
export default function monthsToYears(months: number): number {
  const years = months / monthsInYear
  return Math.floor(years)
}
