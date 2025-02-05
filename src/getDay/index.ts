import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getDay} function options.
 */
export interface GetDayOptions extends ContextOptions<Date> {}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
export function getDay(
  date: DateArg<Date> & {},
  options?: GetDayOptions | undefined,
): number {
  return toDate(date, options?.in).getDay();
}
