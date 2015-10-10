var parse = require('./parse')

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
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
  var date = parse(dirtyDate)
  var time = date.getTime()
  return(
    time >= parse(dirtyStartDate).getTime()
    && time <= parse(dirtyEndDate).getTime()
  )
}

module.exports = isWithinRange

