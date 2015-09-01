var parse = require('./parse')

/**
 * Is passed date weekend?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isWeekend = function(dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day == 0 || day == 6
}

module.exports = isWeekend

