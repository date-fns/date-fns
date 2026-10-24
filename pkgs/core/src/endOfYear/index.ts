import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link endOfYear} function options.
 */
export interface EndOfYearOptions<
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
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has no built-in alternative for the end of a year.
 * You still need date-fns for this operation.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
export function endOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(date: DateArg<DateType>, options?: EndOfYearOptions<ResultDate>): ResultDate {
  const _date = toDate(date, options?.in);
  const yearStartsOn = options?.yearStartsOn ?? 0;
  // A date before the fiscal year's start month belongs to the fiscal
  // year that started the previous calendar year; the end is the day
  // before that fiscal year's start shifted one year forward.
  const year =
    _date.getFullYear() - (_date.getMonth() < yearStartsOn ? 1 : 0);
  _date.setFullYear(year + 1, yearStartsOn, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
