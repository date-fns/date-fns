import { isSameDay } from "../isSameDay/index.js";
import { isWeekend } from "../isWeekend/index.js";
import type { Day } from "../types.js";

export interface BusinessDayOptions {
  /** Dates that count as holidays (excluded from business days). */
  holidays?: Date[];
  /** The day the week starts on (0 Sun – 6 Sat). Defaults to 0 (Sunday). */
  weekStartsOn?: Day;
}

/**
 * @name isBusinessDay
 * @category Weekday Helpers
 * @summary Is the given date a business day?
 *
 * @description
 * Returns `true` if `date` is a weekday (Monday–Friday, using `weekStartsOn`)
 * AND is not in the `holidays` list. See issue #2823.
 *
 * @param date - The date to check.
 * @param options - Optional `{ holidays, weekStartsOn }`.
 * @returns True if `date` is a business day.
 *
 * @example
 * // Is 1 July 2020 a business day?
 * isBusinessDay(new Date(2020, 6, 1)) // true (Wednesday)
 * @example
 * // A weekday that is a configured holiday
 * isBusinessDay(new Date(2020, 6, 1), { holidays: [new Date(2020, 6, 1)] }) // false
 */
export function isBusinessDay(date: Date, options: BusinessDayOptions = {}): boolean {
  if (isWeekend(date, { weekStartsOn: options.weekStartsOn ?? 0 })) {
    return false;
  }
  return !isHoliday(date, options);
}

/**
 * @name isHoliday
 * @category Weekday Helpers
 * @summary Is the given date in the configured `holidays` list?
 *
 * @description
 * Returns `true` if `date` is the same calendar day as any date in the
 * `holidays` option. See issue #2823.
 *
 * @param date - The date to check.
 * @param options - `{ holidays }`.
 * @returns True if `date` is a configured holiday.
 *
 * @example
 * isHoliday(new Date(2020, 6, 1), { holidays: [new Date(2020, 6, 1)] }) // true
 */
export function isHoliday(date: Date, options: { holidays?: Date[] } = {}): boolean {
  const holidays = options.holidays ?? [];
  return holidays.some(holiday => isSameDay(date, holiday));
}
