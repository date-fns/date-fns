/**
 * Returns amount of seconds of passed date.
 * @param {date|string} dirtyDate
 * @returns {number} (seconds)
 */
var getSeconds = function(dirtyDate) {
  var date = new Date(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds

