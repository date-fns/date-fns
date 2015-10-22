var parse = require('./parse')

/**
 * @category Minute Helpers
 * @summary Set the minutes.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} new date with the minutes setted
 */
var setMinutes = function(dirtyDate, minutes) {
  var date = parse(dirtyDate)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes

