import { addDays } from "../addDays/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameDay } from "../isSameDay/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isTomorrow} function options.
 */
export interface IsTomorrowOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
export function isTomorrow<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsTomorrowOptions<ContextDate> | undefined,
): boolean {
  return isSameDay(
    date,
    addDays(constructNow(options?.in || date), 1),
    options,
  );
}
