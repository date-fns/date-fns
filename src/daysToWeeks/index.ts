import requiredArgs from '../_lib/requiredArgs/index'
/**
 * @name daysToWeeks
 * @category Common Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert days number to weeks numbers.
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
  requiredArgs(1, arguments);
  const weeks = days/7;
  return Math.floor(weeks)
}
