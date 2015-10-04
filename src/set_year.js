var parse = require('./parse')

/**
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} year of the new date
 * @returns {Date} new date with the year setted
 */
var setYear = function(dirtyDate, year) {
  var date = parse(dirtyDate)
  date.setFullYear(year)
  return date
}

module.exports = setYear

