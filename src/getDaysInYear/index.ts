import { isLeapYear } from "../isLeapYear/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link getDaysInYear} function options.
 */
export interface GetDaysInYearOptions extends ContextOptions<Date> {}

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
export function getDaysInYear(
  date: DateArg<Date> & {},
  options?: GetDaysInYearOptions | undefined,
): number {
  const _date = toDate(date, options?.in);
  if (Number.isNaN(+_date)) return NaN;
  return isLeapYear(_date) ? 366 : 365;
}
