import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameISOWeek } from "../isSameISOWeek/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isThisISOWeek} function options.
 */
export interface IsThisISOWeekOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * const result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
export function isThisISOWeek<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThisISOWeekOptions<ContextDate> | undefined,
): boolean {
  return isSameISOWeek(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
