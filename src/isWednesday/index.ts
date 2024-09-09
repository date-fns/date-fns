import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isWednesday} function options.
 */
export interface IsWednesdayOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
export function isWednesday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsWednesdayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 3;
}
