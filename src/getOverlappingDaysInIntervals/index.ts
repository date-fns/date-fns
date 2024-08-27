import { getTimezoneOffsetInMilliseconds } from "../_lib/getTimezoneOffsetInMilliseconds/index.js";
import { millisecondsInDay } from "../constants/index.js";
import { toDate } from "../toDate/index.js";
import type { DateFns, Interval } from "../types.js";

/**
 * The {@link getOverlappingDaysInIntervals} function options.
 */
export interface GetOverlappingDaysInIntervalsOptions<DateType extends Date>
  extends DateFns.ContextOptions<DateType> {}

/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals. It uses the time
 * between dates to calculate the number of days, rounding it up to include
 * partial days.
 *
 * Two equal 0-length intervals will result in 0. Two equal 1ms intervals will
 * result in 1.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - An object with options
 *
 * @returns The number of days that overlap in two time intervals
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

export function getOverlappingDaysInIntervals<
  DateType extends Date,
  ContextDate extends Date,
>(
  intervalLeft: Interval<DateType>,
  intervalRight: Interval<DateType>,
  options?: GetOverlappingDaysInIntervalsOptions<ContextDate> | undefined,
): number {
  const [leftStart, leftEnd] = [
    +toDate(intervalLeft.start, options?.in),
    +toDate(intervalLeft.end, options?.in),
  ].sort((a, b) => a - b);
  const [rightStart, rightEnd] = [
    +toDate(intervalRight.start, options?.in),
    +toDate(intervalRight.end, options?.in),
  ].sort((a, b) => a - b);

  // Prevent NaN result if intervals don't overlap at all.
  const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
  if (!isOverlapping) return 0;

  // Remove the timezone offset to negate the DST effect on calculations.
  const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
  const left = overlapLeft - getTimezoneOffsetInMilliseconds(overlapLeft);
  const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
  const right = overlapRight - getTimezoneOffsetInMilliseconds(overlapRight);

  // Ceil the number to include partial days too.
  return Math.ceil((right - left) / millisecondsInDay);
}
