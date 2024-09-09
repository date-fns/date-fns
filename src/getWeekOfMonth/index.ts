import { getDefaultOptions } from "../_lib/defaultOptions/index.js";
import { getDate } from "../getDate/index.js";
import { getDay } from "../getDay/index.js";
import { startOfMonth } from "../startOfMonth/index.js";
import { toDate } from "../toDate/index.js";
import type { DateFns, LocalizedOptions, WeekOptions } from "../types.js";

/**
 * The {@link getWeekOfMonth} function options.
 */
export interface GetWeekOfMonthOptions<DateType extends Date = Date>
  extends LocalizedOptions<"options">,
    WeekOptions,
    DateFns.ContextOptions<DateType> {}

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
export function getWeekOfMonth<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetWeekOfMonthOptions<ContextDate>,
): number {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const currentDayOfMonth = getDate(toDate(date, options?.in));
  if (isNaN(currentDayOfMonth)) return NaN;

  const startWeekDay = getDay(startOfMonth(date, options));

  let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;

  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
