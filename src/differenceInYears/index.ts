import { normalizeDates } from "../_lib/normalizeDates/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link differenceInYears} function options.
 */
export interface DifferenceInYearsOptions extends ContextOptions<Date> {}

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export function differenceInYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  // NOTE: There are two scenarios to consider based on the order of input dates:
  // 1. Ascending order: Only negative differences in days and/or months affect the year count.
  // 2. Descending order: Only positive differences in days and/or months affect the year count.
  const diffInYears = laterDate.getFullYear() - earlierDate.getFullYear();
  const diffInMonths = (laterDate.getMonth() - earlierDate.getMonth()) / 100.0;
  const diffInDays = (laterDate.getDate() - earlierDate.getDate()) / 10000.0;

  return Math.trunc(diffInYears + diffInMonths + diffInDays);
}
