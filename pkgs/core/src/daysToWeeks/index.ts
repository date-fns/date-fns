import { daysInWeek } from "../constants/index.ts";

/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has no built-in conversion from a number of days to truncated whole weeks, so you still need date-fns for this.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param days - The number of days to be converted
 *
 * @returns The number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses trunc rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */
export function daysToWeeks(days: number): number {
  const result = Math.trunc(days / daysInWeek);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
