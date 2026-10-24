import { toDate } from "../toDate/index.ts";
import type { ContextOptions, DateArg } from "../types.ts";

/**
 * The {@link startOfQuarter} function options.
 */
export interface StartOfQuarterOptions<
  DateType extends Date = Date,
> extends ContextOptions<DateType> {
  /**
   * The month the year starts on (0 = January). Allows working with
   * fiscal or academic years whose quarters don't align with the
   * calendar quarters.
   * @default 0
   */
  yearStartsOn?: number;
}

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * **You don't need date-fns\***:
 *
 * Temporal doesn't have a built-in start-of-quarter operation, so you still need date-fns for this.
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
export function startOfQuarter<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfQuarterOptions<ResultDate> | undefined,
): ResultDate {
  const _date = toDate(date, options?.in);
  const yearStartsOn = options?.yearStartsOn ?? 0;
  const currentMonth = _date.getMonth();
  // A date before the fiscal year's start month belongs to the fiscal
  // year that started the previous calendar year. Quarters start every
  // 3 months from `yearStartsOn`; when that lands past December the
  // `setMonth` overflow rolls it into the following calendar year.
  const year = currentMonth < yearStartsOn ? _date.getFullYear() - 1 : _date.getFullYear();
  const monthInFiscalYear = currentMonth - yearStartsOn + (currentMonth < yearStartsOn ? 12 : 0);
  const month = yearStartsOn + monthInFiscalYear - (monthInFiscalYear % 3);
  _date.setFullYear(year, month, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
