var parse = require('./parse')

/**
 * @category Year Helpers
 * @summary Get the year.
 *
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} year
 */
var getYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear

