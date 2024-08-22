import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInCalendarYears} function options.
 */
export interface DifferenceInCalendarYearsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
export function differenceInCalendarYears<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInCalendarYearsOptions<ContextDate> | undefined,
): number {
  return (
    toDate(dateLeft, options?.in).getFullYear() -
    toDate(dateRight, options?.in).getFullYear()
  );
}
