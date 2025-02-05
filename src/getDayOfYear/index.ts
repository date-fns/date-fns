import { differenceInCalendarDays } from "../differenceInCalendarDays/index.js";
import { startOfYear } from "../startOfYear/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getDayOfYear} function options.
 */
export interface GetDayOfYearOptions extends ContextOptions<Date> {}

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export function getDayOfYear(
  date: DateArg<Date> & {},
  options?: GetDayOfYearOptions | undefined,
): number {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
