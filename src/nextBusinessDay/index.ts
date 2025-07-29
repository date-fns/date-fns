import { addDays } from '../addDays/index.js';
import { isWeekend } from '../isWeekend/index.js';
import { isEqual } from '../isEqual/index.js';
import { toDate } from '../toDate/index.js';

/**
 * Options for nextBusinessDay function
 */
export interface NextBusinessDayOptions {
  holidays?: Date[];
}

/**
 * Returns the next business day, skipping weekends and optional holidays
 * @param {Date|number} [date] - The starting date (defaults to now)
 * @param {NextBusinessDayOptions} [options] - Configuration options
 * @returns {Date} The next business day
 *
 * @example
 * // Basic usage (skips weekends)
 * nextBusinessDay(new Date(2025, 6, 18)) // Fri Jul 18 → Mon Jul 21
 *
 * // With custom holidays
 * nextBusinessDay(new Date(2025, 6, 2), {
 *   holidays: [new Date(2025, 6, 3)] // Skip July 3
 * })
 */
export function nextBusinessDay(
  date?: Date | number,
  options?: NextBusinessDayOptions
): Date {
  // 1. Convert input to Date object (or use current date if undefined)
  let currentDate = date ? toDate(date) : toDate(Date.now());

  // 2. Prepare holidays array (empty if not provided)
  const holidays = (options?.holidays || []).map((holiday) => toDate(holiday));

  do {
    // 3. Move to next day
    currentDate = addDays(currentDate, 1);
  } while (
    // 4. Continue searching if:
    isWeekend(currentDate) || // - It's a weekend
    holidays.some((holiday) => isEqual(holiday, currentDate)) // - It's a holiday
  );

  // 5. Return the found business day
  return currentDate;
}