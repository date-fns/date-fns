import { addQuarters } from "../addQuarters/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The {@link subQuarters} function options.
 */
export interface SubQuartersOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of quarters to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
export function subQuarters<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: SubQuartersOptions<ResultDate>,
): ResultDate {
  return addQuarters(date, -amount, options);
}
