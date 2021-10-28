import { Interval } from '../types'

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * @param intervalLeft - the first interval to compare. See [Interval]{@link docs/Interval}
 * @param intervalRight - the second interval to compare. See [Interval]{@link docs/Interval}
 * @returns the number of days that overlap in two time intervals
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
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

export default function getOverlappingDaysInIntervals(
  intervalLeft: Interval,
  intervalRight: Interval
): number {
  const leftStartTime = new Date(intervalLeft.start).getTime()
  const leftEndTime = new Date(intervalLeft.end).getTime()
  const rightStartTime = new Date(intervalRight.start).getTime()
  const rightEndTime = new Date(intervalRight.end).getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval')
  }

  const isOverlapping =
    leftStartTime < rightEndTime && rightStartTime < leftEndTime

  if (!isOverlapping) {
    return 0
  }

  const overlapStartDate =
    rightStartTime < leftStartTime ? leftStartTime : rightStartTime

  const overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime

  const differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}
