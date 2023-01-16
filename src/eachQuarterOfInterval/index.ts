import addQuarters from '../addQuarters/index'
import startOfQuarter from '../startOfQuarter/index'
import toDate from '../toDate/index'
import type { Interval } from '../types'

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @param interval - the interval.
 * @returns the array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
export default function eachQuarterOfInterval<DateType extends Date>(
  interval: Interval<DateType>
): DateType[] {
  const startDate = toDate(interval.start)
  const endDate = toDate(interval.end)

  let endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const startDateQuarter = startOfQuarter(startDate)
  const endDateQuarter = startOfQuarter(endDate)

  endTime = endDateQuarter.getTime()

  const quarters = []

  let currentQuarter = startDateQuarter

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(toDate(currentQuarter))
    currentQuarter = addQuarters(currentQuarter, 1)
  }

  return quarters
}
