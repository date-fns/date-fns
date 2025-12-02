import { toDate } from "../toDate/index.ts";
import { getDay } from "../getDay/index.ts";
import { isSameDay } from "../isSameDay/index.ts";
import type { ContextOptions, DateArg, Day } from "../types.ts";

/**
 * The {@link isWithinBusinessHours} function options.
 */
export interface IsWithinBusinessHoursOptions extends ContextOptions<Date> {
  /** The start hour of the business day (0-23). Default: 9 */
  startOfDay?: number;
  /** The end hour of the business day (0-23). Default: 17 */
  endOfDay?: number;
  /** Array of working days (0=Sunday, 6=Saturday). Default: [1,2,3,4,5] (Mon-Fri) */
  workingDays?: Day[];
  /** Array of holiday dates to exclude from business hours */
  holidays?: DateArg<Date>[];
}

/**
 * @name isWithinBusinessHours
 * @category Common Helpers
 * @summary Is the given date within business hours?
 *
 * @description
 * Is the given date within business hours? By default, business hours are
 * Monday-Friday, 9 AM to 5 PM. You can customize the working days, working hours,
 * and exclude specific holidays.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns True if the date is within business hours, false otherwise
 *
 * @example
 * // Is Tuesday at 2 PM within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 3, 14, 0))
 * //=> true
 *
 * @example
 * // Is Tuesday at 6 PM within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0))
 * //=> false
 *
 * @example
 * // Is Saturday at 2 PM within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 7, 14, 0))
 * //=> false
 *
 * @example
 * // Custom business hours (8 AM - 6 PM, including Saturday)
 * const result = isWithinBusinessHours(
 *   new Date(2023, 0, 7, 14, 0),
 *   { startOfDay: 8, endOfDay: 18, workingDays: [1, 2, 3, 4, 5, 6] }
 * )
 * //=> true
 */
export function isWithinBusinessHours(
  date: DateArg<Date> & {},
  options?: IsWithinBusinessHoursOptions | undefined,
): boolean {
  const _date = toDate(date, options?.in);

  // Return false for invalid dates
  if (isNaN(_date.getTime())) return false;

  // Set defaults
  const startOfDay = options?.startOfDay ?? 9;
  const endOfDay = options?.endOfDay ?? 17;
  const workingDays = options?.workingDays ?? [1, 2, 3, 4, 5]; // Mon-Fri
  const holidays = options?.holidays ?? [];

  // Validate business hours configuration
  if (startOfDay < 0 || startOfDay > 23 || endOfDay < 0 || endOfDay > 23) {
    return false;
  }
  if (startOfDay >= endOfDay) {
    return false;
  }

  // Check if the day is a working day
  const dayOfWeek = getDay(_date) as Day;
  if (!workingDays.includes(dayOfWeek)) {
    return false;
  }

  // Check if the date is a holiday
  for (const holiday of holidays) {
    const holidayDate = toDate(holiday, options?.in);
    if (isSameDay(_date, holidayDate)) {
      return false;
    }
  }

  // Check if the time is within business hours
  const hour = _date.getHours();
  const minute = _date.getMinutes();
  const timeInHours = hour + minute / 60;

  return timeInHours >= startOfDay && timeInHours < endOfDay;
}
