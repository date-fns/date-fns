import { addDays } from '../addDays/index.js';
import { isWeekend } from '../isWeekend/index.js';
import { isEqual } from '../isEqual/index.js';
import { toDate } from '../toDate/index.js';

export interface NextBusinessDayOptions {
  holidays?: Date[];
}

/**
 * @name nextBusinessDay
 * @category Business Day Helpers
 * @summary Get the next business day (excluding weekends and optional holidays).
 *
 * @description
 * Returns the next business day after the given date. Skips weekends and custom holidays.
 *
 * @param date - The starting date
 * @param options - Optional holidays to skip
 * @returns The next business day
 *
 * @example
 * // Next business day after Friday:
 * nextBusinessDay(new Date(2025, 6, 18)) // => Mon Jul 21 2025
 *
 * // Skip custom holidays:
 * nextBusinessDay(new Date(2025, 6, 2), { holidays: [new Date(2025, 6, 3)] })
 */
export function nextBusinessDay(date: Date | number, options?: NextBusinessDayOptions): Date {
  let result = toDate(date);
  const holidays: Date[] = options?.holidays?.map((d) => toDate(d)) || [];

  do {
    result = addDays(result, 1);
  } while (
    isWeekend(result) || holidays.some((holiday) => isEqual(holiday, result))
  );

  return result;
}
