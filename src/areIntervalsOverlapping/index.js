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
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
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
export default function areIntervalsOverlapping (dirtyIntervalLeft, dirtyIntervalRight, dirtyOptions) {
  var intervalLeft = dirtyIntervalLeft || {}
  var intervalRight = dirtyIntervalRight || {}
  var leftStartTime = toDate(intervalLeft.start, dirtyOptions).getTime()
  var leftEndTime = toDate(intervalLeft.end, dirtyOptions).getTime()
  var rightStartTime = toDate(intervalRight.start, dirtyOptions).getTime()
  var rightEndTime = toDate(intervalRight.end, dirtyOptions).getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval')
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime
}
