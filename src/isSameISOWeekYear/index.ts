import { startOfISOWeekYear } from "../startOfISOWeekYear/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSameISOWeekYear} function options.
 */
export interface IsSameISOWeekYearOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
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
 * @returns The dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * const result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */
export function isSameISOWeekYear<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: IsSameISOWeekYearOptions<ContextDate> | undefined,
): boolean {
  return (
    +startOfISOWeekYear(dateLeft, options) ===
    +startOfISOWeekYear(dateRight, options)
  );
}
