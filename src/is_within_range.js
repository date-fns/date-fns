/**
 * Is passed date within given range?
 * @param {date|string} dirtyDate
 * @param {date|string} dirtyStartDate
 * @param {date|string} dirtyEndDate
 * @returns {boolean}
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
  var date = new Date(dirtyDate)
  var time = date.getTime()
  return(
    time >= new Date(dirtyStartDate).getTime()
    && time <= new Date(dirtyEndDate).getTime()
  )
}

module.exports = isWithinRange

