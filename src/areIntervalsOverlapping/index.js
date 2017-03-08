import toDate from '../toDate/index.js'

/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval?
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link docs/types/Options}
 * @returns {Boolean} whether the time intervals are overlapping
 * @throws {Error} The start of an interval cannot be after its end
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 21), end: new Date(2014, 0, 22)}
 * )
 * //=> false
 */
export default function areIntervalsOverlapping (dirtyIntervalLeft, dirtyIntervalRight, options) {
  var leftStartTime = toDate(dirtyIntervalLeft.start, options).getTime()
  var leftEndTime = toDate(dirtyIntervalLeft.end, options).getTime()
  var rightStartTime = toDate(dirtyIntervalRight.start, options).getTime()
  var rightEndTime = toDate(dirtyIntervalRight.end, options).getTime()

  if (leftStartTime > leftEndTime || rightStartTime > rightEndTime) {
    throw new Error('The start of an interval cannot be after its end')
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime
}
