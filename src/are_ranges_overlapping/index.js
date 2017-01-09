var parse = require('../parse/index.js')

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Range} rangeLeft - the first range to compare. See [Range]{@link docs/types/Range}
 * @param {Range} rangeRight - the second range to compare. See [Range]{@link docs/types/Range}
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} The start of a range cannot be after its end
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 17), end: new Date(2014, 0, 21)}
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   {start: new Date(2014, 0, 10), end: new Date(2014, 0, 20)},
 *   {start: new Date(2014, 0, 21), end: new Date(2014, 0, 22)}
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyRangeLeft, dirtyRangeRight) {
  var leftStartTime = parse(dirtyRangeLeft.start).getTime()
  var leftEndTime = parse(dirtyRangeLeft.end).getTime()
  var rightStartTime = parse(dirtyRangeRight.start).getTime()
  var rightEndTime = parse(dirtyRangeRight.end).getTime()

  if (leftStartTime > leftEndTime || rightStartTime > rightEndTime) {
    throw new Error('The start of a range cannot be after its end')
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime
}

module.exports = areRangesOverlapping
