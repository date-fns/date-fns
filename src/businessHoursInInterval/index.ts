import { toDate } from "../toDate/index.ts";
import { getDay } from "../getDay/index.ts";
import { isSameDay } from "../isSameDay/index.ts";
import { addDays } from "../addDays/index.ts";
import { isValid } from "../isValid/index.ts";
import type { ContextOptions, DateArg, Day, Interval } from "../types.ts";

/**
 * The {@link businessHoursInInterval} function options.
 */
export interface BusinessHoursInIntervalOptions extends ContextOptions<Date> {
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
 * @name businessHoursInInterval
 * @category Interval Helpers
 * @summary Get the number of business hours in the given interval
 *
 * @description
 * Get the number of business hours in the given interval, excluding
 * non-working periods (weekends, outside business hours, and holidays).
 * By default, business hours are Monday-Friday, 9 AM to 5 PM.
 *
 * @param interval - The interval to check
 * @param options - An object with options
 *
 * @returns The number of business hours in the interval
 *
 * @example
 * // How many business hours between Monday 9 AM and Monday 5 PM?
 * const result = businessHoursInInterval({
 *   start: new Date(2023, 0, 2, 9, 0),
 *   end: new Date(2023, 0, 2, 17, 0)
 * })
 * //=> 8
 *
 * @example
 * // How many business hours between Friday 2 PM and Monday 11 AM?
 * const result = businessHoursInInterval({
 *   start: new Date(2023, 0, 6, 14, 0),
 *   end: new Date(2023, 0, 9, 11, 0)
 * })
 * //=> 5 (3 hours on Friday + 2 hours on Monday, weekend skipped)
 *
 * @example
 * // Custom business hours (8 AM - 6 PM)
 * const result = businessHoursInInterval(
 *   {
 *     start: new Date(2023, 0, 2, 8, 0),
 *     end: new Date(2023, 0, 2, 18, 0)
 *   },
 *   { startOfDay: 8, endOfDay: 18 }
 * )
 * //=> 10
 */
export function businessHoursInInterval(
  interval: Interval,
  options?: BusinessHoursInIntervalOptions | undefined,
): number {
  const start = toDate(interval.start, options?.in);
  const end = toDate(interval.end, options?.in);

  // Return NaN for invalid dates
  if (!isValid(start) || !isValid(end)) {
    return NaN;
  }

  // Set defaults
  const startOfDay = options?.startOfDay ?? 9;
  const endOfDay = options?.endOfDay ?? 17;
  const workingDays = options?.workingDays ?? [1, 2, 3, 4, 5]; // Mon-Fri
  const holidays = options?.holidays ?? [];

  // Validate business hours
  if (
    startOfDay < 0 ||
    startOfDay > 23 ||
    endOfDay < 0 ||
    endOfDay > 23 ||
    startOfDay >= endOfDay
  ) {
    return NaN;
  }

  // Sort interval to ensure start <= end
  const [intervalStart, intervalEnd] =
    start <= end ? [start, end] : [end, start];

  // Helper function to check if a date is a working day
  const isWorkingDay = (checkDate: Date): boolean => {
    const dayOfWeek = getDay(checkDate) as Day;
    if (!workingDays.includes(dayOfWeek)) {
      return false;
    }

    for (const holiday of holidays) {
      const holidayDate = toDate(holiday, options?.in);
      if (isSameDay(checkDate, holidayDate)) {
        return false;
      }
    }

    return true;
  };

  // Helper function to get hours in decimal format (e.g., 14:30 => 14.5)
  const getTimeInHours = (date: Date): number => {
    return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  };

  let totalHours = 0;
  let currentDate = new Date(intervalStart);

  // Iterate through each day in the interval
  while (currentDate <= intervalEnd) {
    if (isWorkingDay(currentDate)) {
      // Determine the start and end times for this day
      let dayStart = startOfDay;
      let dayEnd = endOfDay;

      // If this is the first day, use the interval start time if it's later
      if (isSameDay(currentDate, intervalStart)) {
        const intervalStartTime = getTimeInHours(intervalStart);
        dayStart = Math.max(startOfDay, intervalStartTime);
      }

      // If this is the last day, use the interval end time if it's earlier
      if (isSameDay(currentDate, intervalEnd)) {
        const intervalEndTime = getTimeInHours(intervalEnd);
        dayEnd = Math.min(endOfDay, intervalEndTime);
      }

      // Add the hours for this day (if any)
      if (dayEnd > dayStart) {
        totalHours += dayEnd - dayStart;
      }
    }

    // Move to the next day
    currentDate = addDays(currentDate, 1);
    
    // Reset to start of day to avoid accumulating time
    currentDate.setHours(0, 0, 0, 0);
  }

  return totalHours;
}
