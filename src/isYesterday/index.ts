import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameDay } from "../isSameDay/index.js";
import { subDays } from "../subDays/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isYesterday} function options.
 */
export interface IsYesterdayOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
export function isYesterday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsYesterdayOptions<ContextDate> | undefined,
): boolean {
  return isSameDay(
    constructFrom(options?.in || date, date),
    subDays(constructNow(options?.in || date), 1),
  );
}
