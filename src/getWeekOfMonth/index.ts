import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { getDate } from "../getDate/index.ts";
import { getDay } from "../getDay/index.ts";
import { startOfMonth } from "../startOfMonth/index.ts";
import { toDate } from "../toDate/index.ts";
import type {
  ContextOptions,
  DateArg,
  LocalizedOptions,
  WeekOptions,
} from "../types.ts";

/**
 * The {@link getWeekOfMonth} function options.
 */
export interface GetWeekOfMonthOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<Date> {}

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
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
export function getWeekOfMonth(
  date: DateArg<Date> & {},
  options?: GetWeekOfMonthOptions,
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
