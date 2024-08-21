import { isSameWeek } from "../isSameWeek/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSameISOWeek} function options.
 */
export interface IsSameISOWeekOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same ISO week (and year)
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */
export function isSameISOWeek<DateType extends Date, ContextDate extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: IsSameISOWeekOptions<ContextDate> | undefined,
): boolean {
  return isSameWeek(dateLeft, dateRight, { ...options, weekStartsOn: 1 });
}
