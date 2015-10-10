var parse = require('./parse')

/**
 * @category Minute Helpers
 * @summary Add the minutes to the given date.
 *
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of minutes to be added
 * @returns {Date} new date with the minutes added
 */
var addMinutes = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setMinutes(date.getMinutes() + amount)
  return date
}

module.exports = addMinutes

