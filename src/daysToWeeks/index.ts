import requiredArgs from '../_lib/requiredArgs/index'

export default function daysToWeeks(days: number): number

/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a number of weeks.
 *
 * @param { number } days - number of days to be converted.
 *
 * @returns {number} the number of days converted in weeks
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 14 days to weeks
 * const result = daysToWeeks(14)
 * //=> 2
 */
export default function daysToWeeks(days: number): number {
  requiredArgs(1, arguments)
  const weeks = days / 7
  return Math.floor(weeks)
}
