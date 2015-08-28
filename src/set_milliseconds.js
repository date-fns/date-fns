/**
 * Sets amount of milliseconds to passed date.
 * @param {date|string} dirtyDate
 * @param {number} milliseconds
 * @returns {date} (new date)
 */
var setMilliseconds = function(dirtyDate, milliseconds) {
  var date = new Date(dirtyDate)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds

