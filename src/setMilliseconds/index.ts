import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link setMilliseconds} function options.
 */
export interface SetMillisecondsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param milliseconds - The milliseconds of the new date
 * @param options - The options
 *
 * @returns The new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
export function setMilliseconds<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  milliseconds: number,
  options?: SetMillisecondsOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  _date.setMilliseconds(milliseconds);
  return _date;
}
