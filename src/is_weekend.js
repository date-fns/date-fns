var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date in a weekend?
 *
 * @description
 * Is the given date in a weekend?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is in the weekend
 */
var isWeekend = function(dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day == 0 || day == 6
}

module.exports = isWeekend

