var parse = require('./parse')
var getISOWeek = require('./get_iso_week')

/**
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} isoWeek of the new date
 * @returns {Date} new date with the ISO week setted
 */
var setISOWeek = function(dirtyDate, isoWeek) {
  var date = parse(dirtyDate)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek

