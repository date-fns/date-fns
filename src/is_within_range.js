var parse = require('./parse')

/**
 * Is the given date within the range?
 * @param {Date|String|Number} dirtyDate - the date to check
 * @param {Date|String|Number} dirtyStartDate - the start of range
 * @param {Date|String|Number} dirtyEndDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {InvalidArgumentException} Argument dirtyStartDate must be before dirtyEndDate
 *
 * @example for date within the range
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example for date outside of the range
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
var isWithinRange = function(dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    var err = new Error('Argument dirtyStartDate must be before dirtyEndDate')
    err.name = 'InvalidArgumentException'
    throw err
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange

