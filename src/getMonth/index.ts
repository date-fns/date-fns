import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getMonth} function options.
 */
export interface GetMonthOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
export function getMonth<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetMonthOptions<ContextDate> | undefined,
): number {
  return toDate(date, options?.in).getMonth();
}
