import { differenceInCalendarWeeks } from "../differenceInCalendarWeeks/index.js";
import { lastDayOfMonth } from "../lastDayOfMonth/index.js";
import { startOfMonth } from "../startOfMonth/index.js";
import type { LocalizedOptions, WeekOptions } from "../types.js";

/**
 * The {@link getWeeksInMonth} function options.
 */
export interface GetWeeksInMonthOptions
  extends LocalizedOptions<"options">,
    WeekOptions {}

/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
export function getWeeksInMonth<DateType extends Date>(
  date: DateType | number | string,
  options?: GetWeeksInMonthOptions,
): number {
  return (
    differenceInCalendarWeeks(
      lastDayOfMonth(date),
      startOfMonth(date),
      options,
    ) + 1
  );
}
