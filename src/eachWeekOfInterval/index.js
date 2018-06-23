import toDate from '../toDate/index.js'
import startOfWeek from '../startOfWeek/index.js'

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week between 6 October 2014 and 23 November 2014:
 * var result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [ 2014-10-05T00:00:00.000Z,
 * //   2014-10-12T00:00:00.000Z,
 * //   2014-10-19T00:00:00.000Z,
 * //   2014-10-26T00:00:00.000Z,
 * //   2014-11-02T00:00:00.000Z,
 * //   2014-11-09T00:00:00.000Z,
 * //   2014-11-16T00:00:00.000Z,
 * //   2014-11-23T00:00:00.000Z
 * // ]
 */
export default function eachWeekOfInterval (dirtyInterval, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start, dirtyOptions)
  var endDate = toDate(interval.end, dirtyOptions)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var startDateWeek = startOfWeek(startDate)
  var endDateWeek = startOfWeek(endDate)

  endTime = endDateWeek.getTime()

  var weeks = []

  var currentWeek = startDateWeek

  while (currentWeek.getTime() <= endTime) {
    weeks.push(toDate(currentWeek, dirtyOptions))
    currentWeek.setDate(currentWeek.getDate() + 7)
  }

  return weeks
}
