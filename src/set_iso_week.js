var parse = require('./parse')
var getISOWeek = require('./get_iso_week')
var getTimeSinceMidnight = require('./get_time_since_midnight')

/**
 * Sets ISO week to given date, saving weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {date|string} dirtyDate
 * @param {number} isoWeek
 * @returns {date} (new date)
 */
var setISOWeek = function(dirtyDate, isoWeek) {
  var date = parse(dirtyDate)
  var time = getTimeSinceMidnight(date)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  date.setHours(0, 0, 0, time)
  return date
}

module.exports = setISOWeek

