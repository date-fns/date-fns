import { addBusinessDays } from "../addBusinessDays/index.js";
import { type DateFns } from "../types.js";

/**
 * The {@link subBusinessDays} function options.
 */
export interface SubBusinessDaysOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Subtract the specified number of business days (mon - fri) from the given date.
 *
 * @description
 * Subtract the specified number of business days (mon - fri) from the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be subtracted.
 * @param options - An object with options
 *
 * @returns The new date with the business days subtracted
 *
 * @example
 * // Subtract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */
export function subBusinessDays<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateType | number | string,
  amount: number,
  options?: SubBusinessDaysOptions<ResultDate> | undefined,
): ResultDate {
  return addBusinessDays(date, -amount, options);
}
