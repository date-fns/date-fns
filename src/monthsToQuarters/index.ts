import requiredArgs from '../_lib/requiredArgs/index'
import { monthsInQuarter } from '../constants/index'

/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - number of months to be converted.
 *
 * @returns the number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */
export default function monthsToQuarters(months: number): number {
  requiredArgs(1, arguments)
  const quarters = months / monthsInQuarter
  return Math.floor(quarters)
}
