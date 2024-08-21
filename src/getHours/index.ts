import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getHours} function options.
 */
export interface GetHoursOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
export function getHours<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetHoursOptions<ContextDate> | undefined,
): number {
  return toDate(date, options?.in).getHours();
}
