import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSunday} function options.
 */
export interface IsSundayOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
export function isSunday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsSundayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 0;
}
