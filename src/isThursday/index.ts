import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isThursday} function options.
 */
export interface IsThursdayOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
export function isThursday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThursdayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 4;
}
