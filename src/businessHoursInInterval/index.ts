import {
  BusinessHoursOptions,
  normalizeBusinessHoursOptions,
  getWorkingHoursStart,
  getWorkingHoursEnd,
} from "../_lib/businessHours/index.ts";
import { toDate } from "../toDate/index.ts";
import { max } from "../max/index.ts";
import { min } from "../min/index.ts";
import { addDays } from "../addDays/index.ts";
import { startOfDay } from "../startOfDay/index.ts";
import { isBefore } from "../isBefore/index.ts";
import { isAfter } from "../isAfter/index.ts";
import type { ContextOptions, DateArg, Interval } from "../types.ts";

/**
 * The {@link businessHoursInInterval} function options.
 */
export interface BusinessHoursInIntervalOptions<DateType extends Date = Date>
  extends BusinessHoursOptions<DateType> {}

/**
 * @name businessHoursInInterval
 * @category Interval Helpers
 * @summary Get the number of business hours in the given interval.
 *
 * @description
 * Calculates the total number of business hours within the given interval,
 * excluding weekends, holidays, and time outside configured working hours.
 * Returns fractional hours (e.g., 8.5 for 8 hours and 30 minutes).
 *
 * By default, business hours are 9:00-17:00 on weekdays (Monday-Friday).
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval to calculate business hours for
 * @param options - An object with options
 *
 * @returns The number of business hours in the interval (fractional)
 *
 * @throws {RangeError} If the interval is invalid
 * @throws {TypeError} If the arguments are invalid
 *
 * @example
 * // How many business hours are in the interval from Monday 9 AM to Wednesday 5 PM?
 * const result = businessHoursInInterval({
 *   start: new Date(2023, 0, 2, 9, 0),
 *   end: new Date(2023, 0, 4, 17, 0)
 * })
 * //=> 24 (3 days × 8 hours)
 *
 * @example
 * // Partial day calculation
 * const result = businessHoursInInterval({
 *   start: new Date(2023, 0, 2, 10, 0),
 *   end: new Date(2023, 0, 2, 15, 30)
 * })
 * //=> 5.5
 *
 * @example
 * // With holidays
 * const result = businessHoursInInterval(
 *   {
 *     start: new Date(2023, 0, 2, 9, 0),
 *     end: new Date(2023, 0, 4, 17, 0)
 *   },
 *   {
 *     holidays: [new Date(2023, 0, 3)]
 *   }
 * )
 * //=> 16 (2 days × 8 hours, excluding holiday)
 */
export function businessHoursInInterval<DateType extends Date>(
  interval: Interval,
  options?: BusinessHoursInIntervalOptions<DateType> | undefined,
): number {
  const start = toDate(interval.start, options?.in);
  const end = toDate(interval.end, options?.in);

  // Validate dates
  if (isNaN(start.getTime())) {
    throw new RangeError("Start date is invalid");
  }
  if (isNaN(end.getTime())) {
    throw new RangeError("End date is invalid");
  }

  // Ensure start is before or equal to end
  if (isAfter(start, end)) {
    throw new RangeError("Start date must be before or equal to end date");
  }

  const normalized = normalizeBusinessHoursOptions(options);

  let totalHours = 0;
  let currentDay = startOfDay(start);
  const endDay = startOfDay(end);

  // Iterate through each day in the interval
  while (isBefore(currentDay, addDays(endDay, 1))) {
    const workStart = getWorkingHoursStart(currentDay, normalized, options);
    const workEnd = getWorkingHoursEnd(currentDay, normalized, options);

    // Skip non-working days
    if (workStart && workEnd) {
      // Calculate the overlap between the interval and this day's working hours
      const overlapStart = max([start, workStart]);
      const overlapEnd = min([end, workEnd]);

      // If there's an overlap, add the hours
      if (isBefore(overlapStart, overlapEnd) || overlapStart.getTime() === overlapEnd.getTime()) {
        const milliseconds = overlapEnd.getTime() - overlapStart.getTime();
        const hours = milliseconds / (1000 * 60 * 60);
        totalHours += hours;
      }
    }

    currentDay = addDays(currentDay, 1);
  }

  return totalHours;
}
