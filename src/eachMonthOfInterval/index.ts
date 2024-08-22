import { toDate } from "../toDate/index.js";
import type { DateFns, Interval, StepOptions } from "../types.js";

/**
 * The {@link eachMonthOfInterval} function options.
 */
export interface EachMonthOfIntervalOptions<DateType extends Date>
  extends StepOptions,
    DateFns.ContextOptions<DateType> {}

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
export function eachMonthOfInterval<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  interval: Interval<DateType>,
  options?: EachMonthOfIntervalOptions<ResultDate>,
): ResultDate[] {
  const startDate = toDate(interval.start, options?.in);
  const endDate = toDate(interval.end, options?.in);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: ResultDate[] = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setMonth(currentDate.getMonth() + step);
  }

  return reversed ? dates.reverse() : dates;
}
