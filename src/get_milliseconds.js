/**
 * Returns amount of milliseconds of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (milliseconds)
 */
var getMilliseconds = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds

