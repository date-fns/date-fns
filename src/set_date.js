var parse = require('./parse')
var getTimeInMilliseconds = require('./get_time_in_milliseconds')

/**
 * Sets day of month to passed date.
 * @param {date|string} dirtyDate
 * @param {number} dayOfMonth
 * @returns {date} (new date)
 */
var setDate = function(dirtyDate, dayOfMonth) {
  var date = parse(dirtyDate)
  var time = getTimeInMilliseconds(date)
  date.setDate(dayOfMonth)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setDate

