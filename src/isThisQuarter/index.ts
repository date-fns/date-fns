import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import { isSameQuarter } from "../isSameQuarter/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link isThisQuarter} function options.
 */
export interface IsThisQuarterOptions<DateType extends Date = Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
export function isThisQuarter<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: IsThisQuarterOptions<ContextDate>,
): boolean {
  return isSameQuarter(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}
