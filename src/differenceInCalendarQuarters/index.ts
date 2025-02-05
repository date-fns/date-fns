import { normalizeDates } from "../_lib/normalizeDates/index.js";
import { getQuarter } from "../getQuarter/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link differenceInCalendarQuarters} function options.
 */
export interface DifferenceInCalendarQuartersOptions
  extends ContextOptions<Date> {}

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
export function differenceInCalendarQuarters(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarQuartersOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const quartersDiff = getQuarter(laterDate_) - getQuarter(earlierDate_);

  return yearsDiff * 4 + quartersDiff;
}
