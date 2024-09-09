import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getDate} function options.
 */
export interface GetDateOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
export function getDate<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateType | number | string,
  options?: GetDateOptions<ResultDate> | undefined,
): number {
  return toDate(date, options?.in).getDate();
}
