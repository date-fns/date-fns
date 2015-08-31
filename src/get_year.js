/**
 * Returns year of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (year)
 */
var getYear = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear

