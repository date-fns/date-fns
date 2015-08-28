/**
 * Returns month of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (month)
 */
var getMonth = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth

