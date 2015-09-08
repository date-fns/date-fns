var parse = require('./parse')
var getTimeSinceMidnight = require('./get_time_since_midnight')

/**
 * Sets day of year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} dayOfYear
 * @returns {date} (new date)
 */
var setDayOfYear = function(dirtyDate, dayOfYear) {
  var date = parse(dirtyDate)
  var time = getTimeSinceMidnight(date)
  date.setMonth(0)
  date.setDate(dayOfYear)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setDayOfYear

