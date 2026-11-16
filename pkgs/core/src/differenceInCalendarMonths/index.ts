import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link differenceInCalendarMonths} function options.
 */
export interface DifferenceInCalendarMonthsOptions extends ContextOptions<Date> {}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in [`Temporal.PlainYearMonth.prototype.until()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until) method.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 *
 * @example
 * // Using Temporal:
 * const result = Temporal.PlainYearMonth.from("2014-01")
 *   .until(Temporal.PlainYearMonth.from("2014-09"), { largestUnit: "months" })
 *   .months
 * //=> 8
 */
export function differenceInCalendarMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarMonthsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();

  return yearsDiff * 12 + monthsDiff;
}
