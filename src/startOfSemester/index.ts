import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link startOfSemester} function options.
 */
export interface StartOfSemesterOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name startOfSemester
 * @category Semester Helpers
 * @summary Return the start of a year semester for the given date.
 *
 * @description
 * Return the start of a year semester for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a semester
 *
 * @example
 * // The start of a semester for 2 September 2014 11:55:00:
 * const result = startOfSemester(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
export function startOfSemester<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfSemesterOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  const currentMonth = _date.getMonth();
  const month = currentMonth - (currentMonth % 6);
  _date.setMonth(month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}