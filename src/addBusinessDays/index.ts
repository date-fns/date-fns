import { constructFrom } from "../constructFrom/index.ts";
import { isSaturday } from "../isSaturday/index.ts";
import { isSunday } from "../isSunday/index.ts";
import { isWeekend } from "../isWeekend/index.ts";
import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link addBusinessDays} function options.
 */
export interface AddBusinessDaysOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 *
 * @example
 * // Adding business days with holiday handling:
 * import { addBusinessDays, isWeekend } from 'date-fns'
 * 
 * // Define your holidays (e.g., US federal holidays for 2024)
 * const holidays = [
 *   new Date(2024, 0, 1),   // New Year's Day
 *   new Date(2024, 0, 15),  // Martin Luther King Jr. Day
 *   new Date(2024, 1, 19),  // Presidents' Day
 *   new Date(2024, 4, 27),  // Memorial Day
 *   new Date(2024, 5, 19),  // Juneteenth
 *   new Date(2024, 6, 4),   // Independence Day
 *   new Date(2024, 8, 2),   // Labor Day
 *   new Date(2024, 9, 14),  // Columbus Day
 *   new Date(2024, 10, 11), // Veterans Day
 *   new Date(2024, 10, 28), // Thanksgiving
 *   new Date(2024, 11, 25)  // Christmas
 * ]
 * 
 * function addBusinessDaysWithHolidays(startDate, businessDaysToAdd, holidays = []) {
 *   let currentDate = new Date(startDate)
 *   let remainingDays = businessDaysToAdd
 *   
 *   while (remainingDays > 0) {
 *     currentDate = addBusinessDays(currentDate, 1)
 *     
 *     // Check if current date is a holiday
 *     const isHoliday = holidays.some(holiday => 
 *       currentDate.getFullYear() === holiday.getFullYear() &&
 *       currentDate.getMonth() === holiday.getMonth() &&
 *       currentDate.getDate() === holiday.getDate()
 *     )
 *     
 *     if (!isHoliday) {
 *       remainingDays--
 *     }
 *   }
 *   
 *   return currentDate
 * }
 * 
 * // Usage: Add 5 business days excluding holidays
 * const startDate = new Date(2024, 0, 2) // January 2, 2024 (Tuesday)
 * const result = addBusinessDaysWithHolidays(startDate, 5, holidays)
 * // Result will skip weekends AND holidays, ensuring exactly 5 business days
 */
export function addBusinessDays<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddBusinessDaysOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  const startedOnWeekend = isWeekend(_date, options);

  if (isNaN(amount)) return constructFrom(options?.in, NaN);

  const hours = _date.getHours();
  const sign = amount < 0 ? -1 : 1;
  const fullWeeks = Math.trunc(amount / 5);

  _date.setDate(_date.getDate() + fullWeeks * 7);

  // Get remaining days not part of a full week
  let restDays = Math.abs(amount % 5);

  // Loops over remaining days
  while (restDays > 0) {
    _date.setDate(_date.getDate() + sign);
    if (!isWeekend(_date, options)) restDays -= 1;
  }

  // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day
  if (startedOnWeekend && isWeekend(_date, options) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (isSaturday(_date, options))
      _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
    if (isSunday(_date, options))
      _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
  }

  // Restore hours to avoid DST lag
  _date.setHours(hours);

  return _date;
}
