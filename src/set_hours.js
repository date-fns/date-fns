var parse = require('./parse')

/**
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} hours of the new date
 * @returns {Date} new date with the hours setted
 */
var setHours = function(dirtyDate, hours) {
  var date = parse(dirtyDate)
  date.setHours(hours)
  return date
}

module.exports = setHours

