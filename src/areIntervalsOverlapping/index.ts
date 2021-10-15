import type { Interval } from '../types'

/**
 * The {@link areIntervalsOverlapping} function options.
 */
export interface AreIntervalsOverlappingOptions {
  /**
   * Whether to include the start and end values in the comparison.
   */
  inclusive?: boolean
}

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping.
 *
 * @param intervalLeft - the first interval to compare.
 * @param intervalRight - the second interval to compare.
 * @param options - the object with options
 * @returns whether the time intervals are overlapping
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
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */
export default function areIntervalsOverlapping(
  intervalLeft: Interval,
  intervalRight: Interval,
  options?: AreIntervalsOverlappingOptions
): boolean {
  const leftStartTime = new Date(intervalLeft.start).getTime()
  const leftEndTime = new Date(intervalLeft.end).getTime()
  const rightStartTime = new Date(intervalRight.start).getTime()
  const rightEndTime = new Date(intervalRight.end).getTime()

  if (options?.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime
}
