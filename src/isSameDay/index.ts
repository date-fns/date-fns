import { startOfDay } from "../startOfDay/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSameDay} function options.
 */
export interface IsSameDayOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
export function isSameDay<DateType extends Date, ContextDate extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: IsSameDayOptions<ContextDate> | undefined,
): boolean {
  const dateLeftStartOfDay = startOfDay(dateLeft, options);
  const dateRightStartOfDay = startOfDay(dateRight, options);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}
