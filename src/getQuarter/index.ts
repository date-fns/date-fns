import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link getQuarter} function options.
 */
export interface GetQuarterOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */
export function getQuarter<DateType extends Date, ContextDate extends Date>(
  date: DateType | number | string,
  options?: GetQuarterOptions<ContextDate> | undefined,
): number {
  const _date = toDate(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}
