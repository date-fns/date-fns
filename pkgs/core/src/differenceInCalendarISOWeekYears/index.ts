import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { getISOWeekYear } from "../getISOWeekYear/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link differenceInCalendarISOWeekYears} function options.
 */
export interface DifferenceInCalendarISOWeekYearsOptions extends ContextOptions<Date> {}

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
 * **You don't need date-fns\***:
 *
 * Temporal dates expose the ISO week-numbering year through the [`yearOfWeek`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek) property. Subtract the two values to get the difference.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
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
 *
 * @example
 * // Using Temporal:
 * const later = Temporal.PlainDate.from("2012-01-01")
 * const earlier = Temporal.PlainDate.from("2010-01-01")
 * const result = later.yearOfWeek - earlier.yearOfWeek
 * //=> 2
 */
export function differenceInCalendarISOWeekYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
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
