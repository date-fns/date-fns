import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { getISOWeekYear } from "../getISOWeekYear/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInCalendarISOWeekYears} function options.
 */
export interface DifferenceInCalendarISOWeekYearsOptions
  extends DateFns.ContextOptions<Date> {}

/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
export function differenceInCalendarISOWeekYears(
  laterDate: DateFns.Arg,
  earlierDate: DateFns.Arg,
  options?: DifferenceInCalendarISOWeekYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    getISOWeekYear(laterDate_, options) - getISOWeekYear(earlierDate_, options)
  );
}
