var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Set the day of the year.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} dayOfYear of the new date
 * @returns {Date} new date with the day of the year setted
 */
var setDayOfYear = function(dirtyDate, dayOfYear) {
  var date = parse(dirtyDate)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear

