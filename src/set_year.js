var parse = require('./parse')
var getTimeInMilliseconds = require('./get_time_in_milliseconds')

/**
 * Sets year to passed date.
 * @param {date|string} dirtyDate
 * @param {number} fullYear
 * @returns {date} (new date)
 */
var setYear = function(dirtyDate, fullYear) {
  var date = parse(dirtyDate)
  var time = getTimeInMilliseconds(date)
  date.setFullYear(fullYear)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setYear

