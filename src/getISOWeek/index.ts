import { millisecondsInWeek } from "../constants/index.js";
import { startOfISOWeek } from "../startOfISOWeek/index.js";
import { startOfISOWeekYear } from "../startOfISOWeekYear/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getISOWeek} function options.
 */
export interface GetISOWeekOptions extends ContextOptions<Date> {}

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
export function getISOWeek(
  date: DateArg<Date> & {},
  options?: GetISOWeekOptions | undefined,
): number {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / millisecondsInWeek) + 1;
}
