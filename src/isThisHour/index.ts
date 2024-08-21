import { constructNow } from "../constructNow/index.js";
import { isSameHour } from "../isSameHour/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isThisHour} function options.
 */
export interface IsThisHourOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
export function isThisHour<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThisHourOptions<ContextDate>,
): boolean {
  return isSameHour(
    toDate(date, options?.in),
    constructNow(options?.in || date),
  );
}
