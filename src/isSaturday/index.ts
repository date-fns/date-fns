import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSaturday} function options.
 */
export interface IsSaturdayOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
export function isSaturday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsSaturdayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 6;
}
