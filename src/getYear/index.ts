import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getYear} function options.
 */
export interface GetYearOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
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
export function getYear<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetYearOptions<ContextDate> | undefined,
): number {
  return toDate(date, options?.in).getFullYear();
}
