import addQuarters from '../addQuarters/index'
import startOfQuarter from '../startOfQuarter/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * var result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
export default function eachQuarterOfInterval(dirtyInterval: Interval): Date[] {
  requiredArgs(1, arguments)

  const interval = dirtyInterval || {}
  const startDate = toDate(interval.start)
  const endDate = toDate(interval.end)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const startDateQuarter = startOfQuarter(startDate)
  const endDateQuarter = startOfQuarter(endDate)

  endTime = endDateQuarter.getTime()

  const quarters = []

  var currentQuarter = startDateQuarter

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(toDate(currentQuarter))
    currentQuarter = addQuarters(currentQuarter, 1)
  }

  return quarters
}
