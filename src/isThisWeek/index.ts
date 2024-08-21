import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameWeek } from "../isSameWeek/index.js";
import type { LocalizedOptions, WeekOptions, DateFns } from "../types.js";

/**
 * The {@link isThisWeek} function options.
 */
export interface IsThisWeekOptions<DateType extends Date>
  extends WeekOptions,
    LocalizedOptions<"options">,
    DateFns.ContextOptions<DateType> {}

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
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
export function isThisWeek<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThisWeekOptions<ContextDate>,
): boolean {
  return isSameWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
    options,
  );
}
