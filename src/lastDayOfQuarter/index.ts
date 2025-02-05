import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link lastDayOfQuarter} function options.
 */
export interface LastDayOfQuarterOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export function lastDayOfQuarter<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: LastDayOfQuarterOptions<ResultDate> | undefined,
): ResultDate {
  const date_ = toDate(date, options?.in);
  const currentMonth = date_.getMonth();
  const month = currentMonth - (currentMonth % 3) + 3;
  date_.setMonth(month, 0);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
