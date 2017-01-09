var parse = require('../parse/index.js')

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Range} range - the range to check
 * @returns {Boolean} the date is within the range
 * @throws {Error} The start of a range cannot be after its end
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyRange) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyRange.start).getTime()
  var endTime = parse(dirtyRange.end).getTime()

  if (startTime > endTime) {
    throw new Error('The start of a range cannot be after its end')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange
