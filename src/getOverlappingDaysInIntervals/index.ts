import { millisecondsInDay } from "../constants/index.js";
import { toDate } from "../toDate/index.js";
import type { Interval } from "../types.js";

/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
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

export function getOverlappingDaysInIntervals<DateType extends Date>(
  intervalLeft: Interval<DateType>,
  intervalRight: Interval<DateType>,
): number {
  const [leftStartTime, leftEndTime] = [
    +toDate(intervalLeft.start),
    +toDate(intervalLeft.end),
  ].sort();
  const [rightStartTime, rightEndTime] = [
    +toDate(intervalRight.start),
    +toDate(intervalRight.end),
  ].sort();

  const isOverlapping =
    leftStartTime < rightEndTime && rightStartTime < leftEndTime;

  if (!isOverlapping) {
    return 0;
  }

  const overlapStartDate =
    rightStartTime < leftStartTime ? leftStartTime : rightStartTime;

  const overlapEndDate =
    rightEndTime > leftEndTime ? leftEndTime : rightEndTime;

  const differenceInMs = overlapEndDate - overlapStartDate;

  return Math.ceil(differenceInMs / millisecondsInDay);
}
