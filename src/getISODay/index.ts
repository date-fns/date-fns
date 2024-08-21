import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getISODay} function options.
 */
export interface GetISODayOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
export function getISODay<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetISODayOptions<ContextDate>,
): number {
  const day = toDate(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}
