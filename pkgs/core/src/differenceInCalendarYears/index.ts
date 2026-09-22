import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link differenceInCalendarYears} function options.
 */
export interface DifferenceInCalendarYearsOptions extends ContextOptions<Date> {}

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * **You don't need date-fns\***:
 *
 * Temporal dates expose the calendar year through the [`year`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year) property. Subtract the two values to get the difference.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 *
 * @example
 * // Using Temporal:
 * const later = Temporal.PlainDate.from("2015-02-11")
 * const earlier = Temporal.PlainDate.from("2013-12-31")
 * const result = later.year - earlier.year
 * //=> 2
 */
export function differenceInCalendarYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
