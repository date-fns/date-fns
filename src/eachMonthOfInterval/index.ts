import { normalizeInterval } from "../_lib/normalizeInterval/index.js";
import { constructFrom } from "../constructFrom/index.js";
import type { ContextOptions, Interval, StepOptions } from "../types.js";

/**
 * The {@link eachMonthOfInterval} function options.
 */
export interface EachMonthOfIntervalOptions<DateType extends Date = Date>
  extends StepOptions,
    ContextOptions<DateType> {}

/**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 */
export type EachMonthOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachMonthOfIntervalOptions | undefined,
> = Array<
  Options extends EachMonthOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
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
  IntervalType extends Interval,
  Options extends EachMonthOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachMonthOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);

  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  date.setDate(1);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: EachMonthOfIntervalResult<IntervalType, Options> = [];

  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setMonth(date.getMonth() + step);
  }

  return reversed ? dates.reverse() : dates;
}
