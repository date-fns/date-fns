import { compareAsc } from "../compareAsc/index.js";
import { differenceInCalendarYears } from "../differenceInCalendarYears/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInYears} function options.
 */
export interface DifferenceInYearsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows use of extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export function differenceInYears<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInYearsOptions<ContextDate> | undefined,
): number {
  const _dateLeft = toDate(dateLeft, options?.in);
  const _dateRight = toDate(dateRight, options?.in);

  const sign = compareAsc(_dateLeft, _dateRight);
  const difference = Math.abs(differenceInCalendarYears(_dateLeft, _dateRight));

  _dateLeft.setFullYear(1584);
  _dateRight.setFullYear(1584);

  const isLastYearNotFull = compareAsc(_dateLeft, _dateRight) === -sign;
  const result = sign * (difference - +isLastYearNotFull);

  return result === 0 ? 0 : result;
}
