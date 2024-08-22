import { addQuarters } from "../addQuarters/index.js";
import { startOfQuarter } from "../startOfQuarter/index.js";
import { toDate } from "../toDate/index.js";
import type { DateFns, Interval, StepOptions } from "../types.js";

/**
 * The {@link eachQuarterOfInterval} function options.
 */
export interface EachQuarterOfIntervalOptions<DateType extends Date>
  extends StepOptions,
    DateFns.ContextOptions<DateType> {}

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [UTCDate](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param interval - The interval
 * @param options - An object with options
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10),
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
export function eachQuarterOfInterval<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  interval: Interval<DateType>,
  options?: EachQuarterOfIntervalOptions<ResultDate>,
): ResultDate[] {
  const startDate = toDate(interval.start, options?.in);
  const endDate = toDate(interval.end, options?.in);

  let reversed = +startDate > +endDate;
  const endTime = reversed
    ? +startOfQuarter(startDate, options)
    : +startOfQuarter(endDate, options);
  let currentDate = reversed
    ? startOfQuarter(endDate, options)
    : startOfQuarter(startDate, options);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: ResultDate[] = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate = addQuarters(currentDate, step, options);
  }

  return reversed ? dates.reverse() : dates;
}
