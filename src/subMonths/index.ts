import { addMonths } from "../addMonths/index.js";
import type { ContextOptions, DateArg } from "../types.js";

/**
 * The subMonths function options.
 */
export interface SubMonthsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
export function subMonths<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: SubMonthsOptions<ResultDate> | undefined,
): ResultDate {
  return addMonths(date, -amount, options);
}
