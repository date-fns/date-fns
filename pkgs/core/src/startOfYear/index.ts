import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link startOfYear} function options.
 */
export interface StartOfYearOptions<
  DateType extends Date = Date,
> extends ContextOptions<DateType> {
  /**
   * The month the year starts on (0 = January). Allows working with
   * fiscal or academic years that don't begin in January.
   * @default 0
   */
  yearStartsOn?: number;
}

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
export function startOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfYearOptions<ResultDate> | undefined,
): ResultDate {
  const date_ = toDate(date, options?.in);
  const yearStartsOn = options?.yearStartsOn ?? 0;
  // A date before the fiscal year's start month belongs to the fiscal
  // year that started the previous calendar year (e.g. for a year
  // starting in April, February 2026 is in the year starting April 2025).
  const year =
    date_.getFullYear() - (date_.getMonth() < yearStartsOn ? 1 : 0);
  date_.setFullYear(year, yearStartsOn, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
