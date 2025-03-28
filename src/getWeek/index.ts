import { millisecondsInWeek } from "../constants/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import { startOfWeekYear } from "../startOfWeekYear/index.js";
import { toDate } from "../toDate/index.js";
import type {
  ContextOptions,
  DateArg,
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  WeekOptions,
} from "../types.js";

/**
 * The {@link getWeek} function options.
 */
export interface GetWeekOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    FirstWeekContainsDateOptions,
    ContextOptions<Date> {}

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
export function getWeek(
  date: DateArg<Date> & {},
  options?: GetWeekOptions | undefined,
): number {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / millisecondsInWeek) + 1;
}
