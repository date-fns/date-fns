import { toDate } from "../toDate/index.ts";
import type { ContextOptions, Interval } from "../types.ts";

/**
 * The {@link areIntervalsOverlapping} function options.
 */
export interface AreIntervalsOverlappingOptions extends ContextOptions<Date> {
  /** Whether the comparison is inclusive or not */
  inclusive?: boolean;
}

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping unless `inclusive` is set to `true`.
 *
 * @param intervalLeft - The first interval to compare.
 * @param intervalRight - The second interval to compare.
 * @param options - The object with options
 *
 * @returns Whether the time intervals are overlapping
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */
export function areIntervalsOverlapping(
  intervalLeft: Interval,
  intervalRight: Interval,
  options?: AreIntervalsOverlappingOptions,
): boolean {
  let leftStartTime = +toDate(intervalLeft.start, options?.in);
  let leftEndTime = +toDate(intervalLeft.end, options?.in);
  if (leftStartTime > leftEndTime) {
    const swap = leftStartTime;
    leftStartTime = leftEndTime;
    leftEndTime = swap;
  }

  let rightStartTime = +toDate(intervalRight.start, options?.in);
  let rightEndTime = +toDate(intervalRight.end, options?.in);
  if (rightStartTime > rightEndTime) {
    const swap = rightStartTime;
    rightStartTime = rightEndTime;
    rightEndTime = swap;
  }

  if (options?.inclusive)
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
