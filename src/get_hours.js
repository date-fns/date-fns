/**
 * Returns amount of hours of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (hours)
 */
var getHours = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours

