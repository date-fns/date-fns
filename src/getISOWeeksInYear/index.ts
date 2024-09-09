import { addWeeks } from "../addWeeks/index.js";
import { millisecondsInWeek } from "../constants/index.js";
import { startOfISOWeekYear } from "../startOfISOWeekYear/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getISOWeeksInYear} function options.
 */
export interface GetISOWeeksInYearOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
export function getISOWeeksInYear<
  DateType extends Date,
  ContextDate extends Date,
>(
  date: DateType | number | string,
  options?: GetISOWeeksInYearOptions<ContextDate> | undefined,
): number {
  const thisYear = startOfISOWeekYear(date, options);
  const nextYear = startOfISOWeekYear(addWeeks(thisYear, 60));
  const diff = +nextYear - +thisYear;

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / millisecondsInWeek);
}
