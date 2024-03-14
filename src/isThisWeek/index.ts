import { constructNow } from "../constructNow/index.js";
import { isSameWeek } from "../isSameWeek/index.js";
import type { LocalizedOptions, WeekOptions } from "../types.js";

/**
 * The {@link isThisWeek} function options.
 */
export interface IsThisWeekOptions
  extends WeekOptions,
    LocalizedOptions<"options"> {}

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
export function isThisWeek<DateType extends Date>(
  date: DateType | number | string,
  options?: IsThisWeekOptions,
): boolean {
  return isSameWeek(date, constructNow(date), options);
}
