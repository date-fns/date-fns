import { isLeapYear } from "../isLeapYear/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getDaysInYear} function options.
 */
export interface GetDaysInYearOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
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
export function getDaysInYear<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetDaysInYearOptions<ContextDate> | undefined,
): number {
  const _date = toDate(date, options?.in);
  if (Number.isNaN(+_date)) return NaN;
  return isLeapYear(_date) ? 366 : 365;
}
