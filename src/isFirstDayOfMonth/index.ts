import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isFirstDayOfMonth} function options.
 */
export interface IsFirstDayOfMonthOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
export function isFirstDayOfMonth<
  DateType extends Date,
  ContextDate extends Date,
>(
  date: DateType | number | string,
  options?: IsFirstDayOfMonthOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDate() === 1;
}
