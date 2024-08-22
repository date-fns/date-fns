import { getQuarter } from "../getQuarter/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInCalendarQuarters} function options.
 */
export interface DifferenceInCalendarQuartersOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
export function differenceInCalendarQuarters<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInCalendarQuartersOptions<ContextDate> | undefined,
): number {
  const _dateLeft = toDate(dateLeft, options?.in);
  const _dateRight = toDate(dateRight, options?.in);

  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const quarterDiff = getQuarter(_dateLeft) - getQuarter(_dateRight);

  return yearDiff * 4 + quarterDiff;
}
