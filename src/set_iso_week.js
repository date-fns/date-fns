var parse = require('./parse')
var getISOWeek = require('./get_iso_week')
var startOfDay = require('./start_of_day')

var MILLISECONDS_IN_WEEK = 604800000

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
  var diff = getISOWeek(date) - isoWeek
  date.setTime(date.getTime() - diff * MILLISECONDS_IN_WEEK)
  return startOfDay(date)
}

module.exports = setISOWeek

