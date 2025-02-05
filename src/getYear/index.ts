import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getYear} function options.
 */
export interface GetYearOptions extends ContextOptions<Date> {}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
export function getYear(
  date: DateArg<Date> & {},
  options?: GetYearOptions | undefined,
): number {
  return toDate(date, options?.in).getFullYear();
}
