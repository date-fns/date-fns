import { addMilliseconds } from "../addMilliseconds/index.js";
import { millisecondsInHour } from "../constants/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link addHours} function options.
 */
export interface AddHoursOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
export function addHours<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateType | number | string,
  amount: number,
  options?: AddHoursOptions<ResultDate> | undefined,
): ResultDate {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}
