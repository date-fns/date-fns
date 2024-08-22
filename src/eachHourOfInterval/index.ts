import { addHours } from "../addHours/index.js";
import { toDate } from "../toDate/index.js";
import type { Interval, StepOptions, DateFns } from "../types.js";

/**
 * The {@link eachHourOfInterval} function options.
 */
export interface EachHourOfIntervalOptions<DateType extends Date>
  extends StepOptions,
    DateFns.ContextOptions<DateType> {}

/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, inferred from the context options if provided.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
export function eachHourOfInterval<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  interval: Interval<DateType>,
  options?: EachHourOfIntervalOptions<ResultDate>,
): ResultDate[] {
  const startDate = toDate(interval.start, options?.in);
  const endDate = toDate(interval.end, options?.in);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  let currentDate = reversed ? endDate : startDate;
  currentDate.setMinutes(0, 0, 0);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate, options?.in));
    currentDate = addHours(currentDate, step);
  }

  return (reversed ? dates.reverse() : dates) as ResultDate[];
}
