import { constructFrom } from "../constructFrom/index.ts";
import { toDate } from "../toDate/index.ts";
import { getDay } from "../getDay/index.ts";
import { isSameDay } from "../isSameDay/index.ts";
import type { ContextOptions, DateArg, Day } from "../types.ts";

/**
 * The {@link addBusinessHours} function options.
 */
export interface AddBusinessHoursOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {
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
 * @name addBusinessHours
 * @category Common Helpers
 * @summary Add business hours to the given date
 *
 * @description
 * Add the specified number of business hours to the given date, skipping
 * non-working periods (weekends, outside business hours, and holidays).
 * By default, business hours are Monday-Friday, 9 AM to 5 PM.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business hours to be added (can be negative)
 * @param options - An object with options
 *
 * @returns The new date with the business hours added
 *
 * @example
 * // Add 5 business hours to Tuesday at 2 PM
 * const result = addBusinessHours(new Date(2023, 0, 3, 14, 0), 5)
 * //=> Wed Jan 04 2023 11:00:00 (next day at 11 AM)
 *
 * @example
 * // Add 3 business hours to Friday at 4 PM
 * const result = addBusinessHours(new Date(2023, 0, 6, 16, 0), 3)
 * //=> Mon Jan 09 2023 11:00:00 (skips weekend)
 *
 * @example
 * // Subtract 2 business hours
 * const result = addBusinessHours(new Date(2023, 0, 3, 11, 0), -2)
 * //=> Tue Jan 03 2023 09:00:00
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

  // Return invalid date for NaN amount or invalid date
  if (isNaN(amount) || isNaN(_date.getTime())) {
    return constructFrom(options?.in || date, NaN);
  }

  // If amount is 0, return the date as-is
  if (amount === 0) {
    return constructFrom(options?.in || date, _date);
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
    return constructFrom(options?.in || date, NaN);
  }

  const businessHoursPerDay = endOfDay - startOfDay;
  const sign = amount < 0 ? -1 : 1;
  let remainingHours = Math.abs(amount);

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

  // Helper function to move to the next/previous working day at start of business hours
  const moveToNextWorkingDay = (currentDate: Date, direction: number): void => {
    do {
      currentDate.setDate(currentDate.getDate() + direction);
    } while (!isWorkingDay(currentDate));

    // Set to start or end of business day depending on direction
    if (direction > 0) {
      currentDate.setHours(startOfDay, 0, 0, 0);
    } else {
      currentDate.setHours(endOfDay, 0, 0, 0);
    }
  };

  const result = new Date(_date);

  // If we're not on a working day, move to the next/previous working day
  if (!isWorkingDay(result)) {
    moveToNextWorkingDay(result, sign);
  }

  // If we're outside business hours, move to start of next business period
  const currentHour = result.getHours() + result.getMinutes() / 60;
  if (sign > 0) {
    if (currentHour < startOfDay) {
      result.setHours(startOfDay, 0, 0, 0);
    } else if (currentHour >= endOfDay) {
      moveToNextWorkingDay(result, 1);
    }
  } else {
    if (currentHour >= endOfDay) {
      result.setHours(endOfDay, 0, 0, 0);
    } else if (currentHour < startOfDay) {
      moveToNextWorkingDay(result, -1);
    }
  }

  // Add/subtract hours
  while (remainingHours > 0) {
    const currentHour = result.getHours() + result.getMinutes() / 60;

    if (sign > 0) {
      // Adding hours
      const hoursUntilEndOfDay = endOfDay - currentHour;

      if (remainingHours <= hoursUntilEndOfDay) {
        // Can fit remaining hours in current day
        const totalMinutes = Math.round(
          (currentHour + remainingHours) * 60,
        );
        result.setHours(Math.floor(totalMinutes / 60), totalMinutes % 60, 0, 0);
        remainingHours = 0;
      } else {
        // Need to move to next working day
        remainingHours -= hoursUntilEndOfDay;
        moveToNextWorkingDay(result, 1);
      }
    } else {
      // Subtracting hours
      const hoursFromStartOfDay = currentHour - startOfDay;

      if (remainingHours <= hoursFromStartOfDay) {
        // Can fit remaining hours in current day
        const totalMinutes = Math.round(
          (currentHour - remainingHours) * 60,
        );
        result.setHours(Math.floor(totalMinutes / 60), totalMinutes % 60, 0, 0);
        remainingHours = 0;
      } else {
        // Need to move to previous working day
        remainingHours -= hoursFromStartOfDay;
        moveToNextWorkingDay(result, -1);
      }
    }
  }

  return constructFrom(options?.in || date, result);
}
