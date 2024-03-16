import { addMinutes } from "../addMinutes/index.js";
import { startOfMinute } from "../startOfMinute/index.js";
import { toDate } from "../toDate/index.js";
import type { Interval, StepOptions } from "../types.js";

/**
 * The {@link eachMinuteOfInterval} function options.
 */
export interface EachMinuteOfIntervalOptions extends StepOptions {}

/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
export function eachMinuteOfInterval<DateType extends Date>(
  interval: Interval<DateType>,
  options?: EachMinuteOfIntervalOptions,
): DateType[] {
  const startDate = startOfMinute(toDate(interval.start));
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  let currentDate = reversed ? endDate : startDate;

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate = addMinutes(currentDate, step);
  }

  return reversed ? dates.reverse() : dates;
}
