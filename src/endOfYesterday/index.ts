import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import type { ContextOptions } from "../types.js";

/**
 * The {@link endOfYesterday} function options.
 */
export interface EndOfYesterdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @returns The end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
export function endOfYesterday<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(options?: EndOfYesterdayOptions<ResultDate> | undefined): ResultDate {
  const now = constructNow(options?.in);
  const date = constructFrom(options?.in, 0);
  date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}
