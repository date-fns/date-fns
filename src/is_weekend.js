var parse = require('./parse')

/**
 * Is the given date in a weekend?
 * @param {Date|String|Number} dirtyDate - the date to check
 * @returns {Boolean} the date is in the weekend
 */
var isWeekend = function(dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day == 0 || day == 6
}

module.exports = isWeekend

