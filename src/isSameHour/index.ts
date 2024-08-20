import { startOfHour } from "../startOfHour/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isSameHour} function options.
 */
export interface IsSameHourOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same hour (and same day)
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * const result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */
export function isSameHour<DateType extends Date, ContextDate extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: IsSameHourOptions<ContextDate> | undefined,
): boolean {
  return +startOfHour(dateLeft, options) === +startOfHour(dateRight, options);
}
