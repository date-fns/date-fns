import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import type { LocalizedOptions, WeekOptions } from "../types.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link isSameWeek} function options.
 */
export interface IsSameWeekOptions
  extends WeekOptions,
    LocalizedOptions<"options">,
    ContextOptions<Date> {}

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
export function isSameWeek(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameWeekOptions,
): boolean {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return (
    +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options)
  );
}
