var parse = require('./parse')

/**
 * Get the year of the given date.
 * @param {Date|String|Number} dirtyDate - the given date
 * @returns {Number} year
 */
var getYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear

