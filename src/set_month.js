/**
 * Sets month index to passed date.
 * @param {date|string} dirtyDate
 * @param {number} monthIndex
 * @returns {date} (new date)
 */
var setMonth = function(dirtyDate, monthIndex) {
  var date = new Date(dirtyDate)
  date.setMonth(monthIndex)
  return date
}

module.exports = setMonth

