import toDate from '../toDate/index.js'

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @returns {Date[]} the array with starts of months from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * var result = eachDayOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Thu Feb 06 2014 00:00:00,
 * //   Thu Mar 06 2014 00:00:00,
 * //   Sun Apr 06 2014 00:00:00,
 * //   Tue May 06 2014 00:00:00,
 * //   Fri Jun 06 2014 00:00:00,
 * //   Sun Jul 06 2014 00:00:00,
 * //   Wed Aug 06 2014 00:00:00
 * // ]
 */
export default function eachMonthOfInterval(dirtyInterval) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start)
  var endDate = toDate(interval.end)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate.setMonth(currentDate.getMonth() + 1)
  }

  return dates
}
