import {
  BusinessHoursOptions,
  normalizeBusinessHoursOptions,
  isWorkingDay,
  isHoliday,
} from "../_lib/businessHours/index.ts";
import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link isWithinBusinessHours} function options.
 */
export interface IsWithinBusinessHoursOptions<DateType extends Date = Date>
  extends BusinessHoursOptions<DateType> {}

/**
 * @name isWithinBusinessHours
 * @category Business Hours Helpers
 * @summary Is the given date within business hours?
 *
 * @description
 * Checks if the given date falls within configured business hours.
 * By default, business hours are 9:00-17:00 on weekdays (Monday-Friday),
 * excluding weekends and holidays.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns True if the date is within business hours, false otherwise
 *
 * @example
 * // Is Tuesday at 10:00 AM within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 3, 10, 0))
 * //=> true
 *
 * @example
 * // Is Tuesday at 6:00 PM within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 3, 18, 0))
 * //=> false
 *
 * @example
 * // Is Saturday within business hours?
 * const result = isWithinBusinessHours(new Date(2023, 0, 7, 10, 0))
 * //=> false
 *
 * @example
 * // Custom business hours (8:00-18:00, Monday-Saturday)
 * const result = isWithinBusinessHours(
 *   new Date(2023, 0, 7, 10, 0),
 *   {
 *     startOfDay: "08:00",
 *     endOfDay: "18:00",
 *     workingDays: [1, 2, 3, 4, 5, 6]
 *   }
 * )
 * //=> true
 */
export function isWithinBusinessHours(
  date: DateArg<Date> & {},
  options?: IsWithinBusinessHoursOptions | undefined,
): boolean {
  const _date = toDate(date, options?.in);

  // Check for invalid date
  if (isNaN(_date.getTime())) {
    return false;
  }

  const normalized = normalizeBusinessHoursOptions(options);

  // Check if it's a working day
  if (!isWorkingDay(_date, normalized.workingDays)) {
    return false;
  }

  // Check if it's a holiday
  if (isHoliday(_date, normalized.holidays, options)) {
    return false;
  }

  // Check if time is within business hours
  const hours = _date.getHours();
  const minutes = _date.getMinutes();

  const currentMinutes = hours * 60 + minutes;
  const startMinutes = normalized.startHour * 60 + normalized.startMinute;
  const endMinutes = normalized.endHour * 60 + normalized.endMinute;

  return currentMinutes >= startMinutes && currentMinutes < endMinutes;
}
