import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInCalendarMonths} function options.
 */
export interface DifferenceInCalendarMonthsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
export function differenceInCalendarMonths<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInCalendarMonthsOptions<ContextDate> | undefined,
): number {
  const _dateLeft = toDate(dateLeft, options?.in);
  const _dateRight = toDate(dateRight, options?.in);

  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
}
