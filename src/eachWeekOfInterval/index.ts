import { normalizeInterval } from "../_lib/normalizeInterval/index.js";
import { addWeeks } from "../addWeeks/index.js";
import { constructFrom } from "../constructFrom/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import type {
  ContextOptions,
  Interval,
  LocalizedOptions,
  StepOptions,
  WeekOptions,
} from "../types.js";

/**
 * The {@link eachWeekOfInterval} function options.
 */
export interface EachWeekOfIntervalOptions<DateType extends Date = Date>
  extends StepOptions,
    WeekOptions,
    LocalizedOptions<"options">,
    ContextOptions<DateType> {}

/**
 * The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the interval start date,
 * then the end interval date. If a context function is passed, it uses the context function return type.
 */
export type EachWeekOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachWeekOfIntervalOptions | undefined,
> = Array<
  Options extends EachWeekOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
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
  IntervalType extends Interval,
  Options extends EachWeekOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachWeekOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);

  let reversed = +start > +end;
  const startDateWeek = reversed
    ? startOfWeek(end, options)
    : startOfWeek(start, options);
  const endDateWeek = reversed
    ? startOfWeek(start, options)
    : startOfWeek(end, options);

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

  const dates: EachWeekOfIntervalResult<IntervalType, Options> = [];

  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push(constructFrom(start, currentDate));
    currentDate = addWeeks(currentDate, step);
    currentDate.setHours(15);
  }

  return reversed ? dates.reverse() : dates;
}
