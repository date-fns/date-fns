var parse = require('./parse')

/**
 * @category Millisecond Helpers
 * @summary Add the milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of milliseconds to be added
 * @returns {Date} new date with the milliseconds added
 */
var addMilliseconds = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setMilliseconds(date.getMilliseconds() + amount)
  return date
}

module.exports = addMilliseconds

