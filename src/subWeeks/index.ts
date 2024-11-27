import { addWeeks } from "../addWeeks/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link subWeeks} function options.
 */
export interface SubWeeksOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
export function subWeeks<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: SubWeeksOptions<ResultDate> | undefined,
): ResultDate {
  return addWeeks(date, -amount, options);
}
