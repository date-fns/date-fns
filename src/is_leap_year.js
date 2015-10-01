var parse = require('./parse')

/**
 * Is date in the leap year?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isLeapYear = function(dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear

