import toDate from '../toDate/index.js'

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {Error} The start of an interval cannot be after its end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
export default function eachDayOfInterval (dirtyInterval, options) {
  var startDate = toDate(dirtyInterval.start, options)
  var endDate = toDate(dirtyInterval.end, options)

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The start of an interval cannot be after its end')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate, options))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}
