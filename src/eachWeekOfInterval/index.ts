import { addWeeks } from "../addWeeks/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import { toDate } from "../toDate/index.js";
import type {
  DateFns,
  Interval,
  LocalizedOptions,
  StepOptions,
  WeekOptions,
} from "../types.js";

/**
 * The {@link eachWeekOfInterval} function options.
 */
export interface EachWeekOfIntervalOptions<DateType extends Date>
  extends StepOptions,
    WeekOptions,
    LocalizedOptions<"options">,
    DateFns.ContextOptions<DateType> {}

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
export function eachWeekOfInterval<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  interval: Interval<DateType>,
  options?: EachWeekOfIntervalOptions<ResultDate>,
): ResultDate[] {
  const startDate = toDate(interval.start, options?.in);
  const endDate = toDate(interval.end, options?.in);

  let reversed = +startDate > +endDate;
  const startDateWeek = reversed
    ? startOfWeek(endDate, options)
    : startOfWeek(startDate, options);
  const endDateWeek = reversed
    ? startOfWeek(startDate, options)
    : startOfWeek(endDate, options);

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);

  const endTime = +endDateWeek.getTime();
  let currentDate = startDateWeek;

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push(toDate(currentDate, options?.in));
    currentDate = addWeeks(currentDate, step);
    currentDate.setHours(15);
  }

  return reversed ? dates.reverse() : dates;
}
