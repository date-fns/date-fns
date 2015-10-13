var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Get the day of the week.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} day of week
 */
var getDay = function(dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay

