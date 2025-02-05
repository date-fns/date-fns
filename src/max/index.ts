import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";
import type { ContextFn, ContextOptions, DateArg } from "../types.js";

/**
 * The {@link max} function options.
 */
export interface MaxOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */
export function max<DateType extends Date, ResultDate extends Date = DateType>(
  dates: DateArg<DateType>[],
  options?: MaxOptions<ResultDate> | undefined,
): ResultDate {
  let result: ResultDate | undefined;
  let context = options?.in;

  dates.forEach((date) => {
    // Use the first date object as the context function
    if (!context && typeof date === "object")
      context = constructFrom.bind(null, date) as ContextFn<ResultDate>;

    const date_ = toDate(date, context);
    if (!result || result < date_ || isNaN(+date_)) result = date_;
  });

  return constructFrom(context, result || NaN);
}
