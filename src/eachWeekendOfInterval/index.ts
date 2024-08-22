import { eachDayOfInterval } from "../eachDayOfInterval/index.js";
import { isWeekend } from "../isWeekend/index.js";
import type { Interval, DateFns } from "../types.js";

/**
 * The {@link eachWeekendOfInterval} function options.
 */
export interface EachWeekendOfIntervalOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param interval - The given interval
 * @param options - An object with options
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
export function eachWeekendOfInterval<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  interval: Interval<DateType>,
  options?: EachWeekendOfIntervalOptions<ResultDate>,
): ResultDate[] {
  const dateInterval = eachDayOfInterval(interval, options);
  const weekends: ResultDate[] = [];
  let index = 0;
  while (index < dateInterval.length) {
    const date = dateInterval[index++];
    if (isWeekend(date)) weekends.push(date);
  }
  return weekends;
}
