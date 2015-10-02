var parse = require('./parse')
var endOfDay = require('./end_of_day')
var endOfMonth = require('./end_of_month')

/**
 * Is the given date the last day of a month?
 * @param {Date|String|Number} dirtyDate - the date to check
 * @returns {Boolean} the date is the last day of a month
 */
var isLastDayOfMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() == endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth

