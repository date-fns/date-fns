import { toDate } from "../toDate/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link startOfMinute} function options.
 */
export interface StartOfMinuteOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
export function startOfMinute<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateType | number | string,
  options?: StartOfMinuteOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  _date.setSeconds(0, 0);
  return _date;
}
