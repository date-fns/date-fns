import { differenceInCalendarDays } from "../differenceInCalendarDays/index.js";
import { startOfYear } from "../startOfYear/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getDayOfYear} function options.
 */
export interface GetDayOfYearOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export function getDayOfYear<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetDayOfYearOptions<ContextDate> | undefined,
): number {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
