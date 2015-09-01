var parse = require('./parse')
var endOfDay = require('./end_of_day')
var endOfMonth = require('./end_of_month')

/**
 * Is passed date last day of month?
 * @param {date|string} dirtyDate
 * @returns {boolean}
 */
var isLastDayOfMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() == endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth

