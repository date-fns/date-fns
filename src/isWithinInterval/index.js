import toDate from '../toDate/index.js'

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the date is within the interval
 * @throws {Error} The start of an interval cannot be after its end
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 3),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 10),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> false
 */
export default function isWithinInterval (dirtyDate, dirtyInterval, options) {
  var time = toDate(dirtyDate, options).getTime()
  var startTime = toDate(dirtyInterval.start, options).getTime()
  var endTime = toDate(dirtyInterval.end, options).getTime()

  if (startTime > endTime) {
    throw new Error('The start of an interval cannot be after its end')
  }

  return time >= startTime && time <= endTime
}
