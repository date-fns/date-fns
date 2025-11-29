import {
  BusinessHoursOptions,
  normalizeBusinessHoursOptions,
  getWorkingHoursStart,
  getWorkingHoursEnd,
  isWorkingDay,
  isHoliday,
} from "../_lib/businessHours/index.ts";
import { toDate } from "../toDate/index.ts";
import { addDays } from "../addDays/index.ts";
import { addMinutes } from "../addMinutes/index.ts";
import { constructFrom } from "../constructFrom/index.ts";
import { isBefore } from "../isBefore/index.ts";
import { isAfter } from "../isAfter/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link addBusinessHours} function options.
 */
export interface AddBusinessHoursOptions<DateType extends Date = Date>
  extends BusinessHoursOptions<DateType> {}

/**
 * @name addBusinessHours
 * @category Business Hours Helpers
 * @summary Add business hours to the given date.
 *
 * @description
 * Add the specified number of business hours to the given date, skipping
 * weekends, holidays, and after-hours periods. Returns a new date without
 * mutating the original.
 *
 * By default, business hours are 9:00-17:00 on weekdays (Monday-Friday).
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The number of business hours to add (can be negative)
 * @param options - An object with options
 *
 * @returns The new date with business hours added
 *
 * @throws {RangeError} If the date is invalid
 * @throws {TypeError} If the arguments are invalid
 *
 * @example
 * // Add 4 business hours to Monday 2 PM
 * const result = addBusinessHours(new Date(2023, 0, 2, 14, 0), 4)
 * //=> Mon Jan 02 2023 09:00:00 (next day at 9 AM + 1 hour)
 * // Actually: same day 14:00 + 4 hours = 18:00, but business hours end at 17:00
 * // So 3 hours on Monday (14:00-17:00), then 1 hour on Tuesday (9:00-10:00)
 *
 * @example
 * // Add 10 business hours starting Monday 9 AM
 * const result = addBusinessHours(new Date(2023, 0, 2, 9, 0), 10)
 * //=> Tue Jan 03 2023 11:00:00
 *
 * @example
 * // Subtract 5 business hours from Wednesday 11 AM
 * const result = addBusinessHours(new Date(2023, 0, 4, 11, 0), -5)
 * //=> Tue Jan 03 2023 14:00:00
 *
 * @example
 * // With holidays
 * const result = addBusinessHours(
 *   new Date(2023, 0, 2, 15, 0), // Monday 3 PM
 *   10,
 *   { holidays: [new Date(2023, 0, 3)] } // Tuesday is holiday
 * )
 * //=> Wed Jan 04 2023 11:00:00 (skips Tuesday)
 */
export function addBusinessHours<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddBusinessHoursOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);

  // Handle invalid date
  if (isNaN(_date.getTime())) {
    return constructFrom(options?.in || date, NaN);
  }

  // Handle invalid amount
  if (isNaN(amount) || !isFinite(amount)) {
    return constructFrom(options?.in || date, NaN);
  }

  // Handle zero amount
  if (amount === 0) {
    return constructFrom(options?.in || date, _date);
  }

  const normalized = normalizeBusinessHoursOptions(options);
  
  // Convert hours to minutes for more precise calculation
  let remainingMinutes = amount * 60;
  const direction = remainingMinutes >= 0 ? 1 : -1;
  remainingMinutes = Math.abs(remainingMinutes);

  let currentDate = new Date(_date);

  // Helper to move to next/previous working moment
  const moveToWorkingTime = (date: Date, dir: number): Date => {
    let result = new Date(date);
    let attempts = 0;
    const maxAttempts = 366; // Prevent infinite loops

    while (attempts < maxAttempts) {
      attempts++;
      
      // Check if current day is a working day
      if (
        !isWorkingDay(result, normalized.workingDays) ||
        isHoliday(result, normalized.holidays, options)
      ) {
        // Move to next/previous day
        result = addDays(result, dir);
        result.setHours(
          dir > 0 ? normalized.startHour : normalized.endHour,
          dir > 0 ? normalized.startMinute : normalized.endMinute,
          0,
          0,
        );
        continue;
      }

      const workStart = getWorkingHoursStart(result, normalized, options);
      const workEnd = getWorkingHoursEnd(result, normalized, options);

      if (!workStart || !workEnd) {
        // Non-working day, move to next/previous day
        result = addDays(result, dir);
        result.setHours(
          dir > 0 ? normalized.startHour : normalized.endHour,
          dir > 0 ? normalized.startMinute : normalized.endMinute,
          0,
          0,
        );
        continue;
      }

      // Check if current time is within working hours
      if (dir > 0) {
        if (isBefore(result, workStart)) {
          // Before work hours, move to start
          result = new Date(workStart);
          break;
        } else if (isAfter(result, workEnd) || result.getTime() === workEnd.getTime()) {
          // After work hours, move to next day's start
          result = addDays(result, 1);
          result.setHours(normalized.startHour, normalized.startMinute, 0, 0);
          continue;
        } else {
          // Within working hours
          break;
        }
      } else {
        // Going backwards
        if (isAfter(result, workEnd) || result.getTime() === workEnd.getTime()) {
          // After work hours, move to end
          result = new Date(workEnd);
          break;
        } else if (isBefore(result, workStart)) {
          // Before work hours, move to previous day's end
          result = addDays(result, -1);
          result.setHours(normalized.endHour, normalized.endMinute, 0, 0);
          continue;
        } else {
          // Within working hours
          break;
        }
      }
    }

    if (attempts >= maxAttempts) {
      throw new RangeError("Unable to find working time within reasonable range");
    }

    return result;
  };

  // Move to a working time if not already
  currentDate = moveToWorkingTime(currentDate, direction);

  // Add/subtract the hours
  let iterations = 0;
  const maxIterations = 10000;

  while (remainingMinutes > 0 && iterations < maxIterations) {
    iterations++;

    const workStart = getWorkingHoursStart(currentDate, normalized, options);
    const workEnd = getWorkingHoursEnd(currentDate, normalized, options);

    if (!workStart || !workEnd) {
      // This shouldn't happen after moveToWorkingTime, but handle it
      currentDate = addDays(currentDate, direction);
      currentDate = moveToWorkingTime(currentDate, direction);
      continue;
    }

    // Calculate how many minutes are available in this working period
    let availableMinutes: number;
    
    if (direction > 0) {
      // Going forward: from current time to end of work day
      availableMinutes = (workEnd.getTime() - currentDate.getTime()) / (1000 * 60);
    } else {
      // Going backward: from current time to start of work day
      availableMinutes = (currentDate.getTime() - workStart.getTime()) / (1000 * 60);
    }

    if (availableMinutes >= remainingMinutes) {
      // We can add all remaining minutes in this period
      currentDate = addMinutes(currentDate, remainingMinutes * direction);
      remainingMinutes = 0;
    } else {
      // Use all available minutes and continue to next period
      remainingMinutes -= availableMinutes;
      
      if (direction > 0) {
        // Move to next working day's start
        currentDate = addDays(currentDate, 1);
        currentDate.setHours(normalized.startHour, normalized.startMinute, 0, 0);
        currentDate = moveToWorkingTime(currentDate, direction);
      } else {
        // Move to previous working day's end
        currentDate = addDays(currentDate, -1);
        currentDate.setHours(normalized.endHour, normalized.endMinute, 0, 0);
        currentDate = moveToWorkingTime(currentDate, direction);
      }
    }
  }

  if (iterations >= maxIterations) {
    throw new RangeError("Exceeded maximum iterations while adding business hours");
  }

  return constructFrom(options?.in || date, currentDate);
}
