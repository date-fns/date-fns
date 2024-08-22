import { compareAsc } from "../compareAsc/index.js";
import { differenceInCalendarMonths } from "../differenceInCalendarMonths/index.js";
import { isLastDayOfMonth } from "../isLastDayOfMonth/index.js";
import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link differenceInMonths} function options.
 */
export interface DifferenceInMonthsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *

 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
export function differenceInMonths<
  DateType extends Date,
  ContextDate extends Date,
>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
  options?: DifferenceInMonthsOptions<ContextDate> | undefined,
): number {
  const _dateLeft = toDate(dateLeft, options?.in);
  const _dateRight = toDate(dateRight, options?.in);

  const sign = compareAsc(_dateLeft, _dateRight);
  const difference = Math.abs(
    differenceInCalendarMonths(_dateLeft, _dateRight),
  );

  if (difference < 1) return 0;

  if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27)
    _dateLeft.setDate(30);

  _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);

  let isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;

  if (
    isLastDayOfMonth(toDate(dateLeft, options?.in)) &&
    difference === 1 &&
    compareAsc(dateLeft, _dateRight) === 1
  ) {
    isLastMonthNotFull = false;
  }

  const result = sign * (difference - Number(isLastMonthNotFull));
  return result === 0 ? 0 : result;
}
