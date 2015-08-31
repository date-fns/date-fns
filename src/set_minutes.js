/**
 * Sets amount of minutes to passed date.
 * @param {date|string} dirtyDate
 * @param {number} minutes
 * @returns {date} (new date)
 */
var setMinutes = function(dirtyDate, minutes) {
  var date = new Date(dirtyDate)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes

