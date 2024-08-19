import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isMonday} function options.
 */
export interface IsMondayOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
export function isMonday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsMondayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 1;
}
