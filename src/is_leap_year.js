var parse = require('./parse')

/**
 * Is date in the leap year?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isLeapYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return new Date(year, 1, 29).getMonth() == 1
}

module.exports = isLeapYear

