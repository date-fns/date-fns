import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameMonth } from "../isSameMonth/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isThisMonth} function options.
 */
export interface IsThisMonthOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
export function isThisMonth<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThisMonthOptions<ContextDate> | undefined,
): boolean {
  return isSameMonth(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
