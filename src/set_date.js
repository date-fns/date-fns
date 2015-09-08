var parse = require('./parse')
var getTimeSinceMidnight = require('./get_time_since_midnight')

/**
 * Sets day of month to passed date.
 * @param {date|string} dirtyDate
 * @param {number} dayOfMonth
 * @returns {date} (new date)
 */
var setDate = function(dirtyDate, dayOfMonth) {
  var date = parse(dirtyDate)
  var time = getTimeSinceMidnight(date)
  date.setDate(dayOfMonth)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setDate

