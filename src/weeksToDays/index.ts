import { daysInWeek } from '../constants/index'

/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - number of weeks to be converted
 *
 * @returns the number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
export default function weeksToDays(weeks: number): number {
  return Math.floor(weeks * daysInWeek)
}
