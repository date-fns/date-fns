import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isTuesday} function options.
 */
export interface IsTuesdayOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
export function isTuesday<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsTuesdayOptions<ContextDate> | undefined,
): boolean {
  return toDate(date, options?.in).getDay() === 2;
}
