var parse = require('./parse')

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} new date with the milliseconds setted
 */
var setMilliseconds = function(dirtyDate, milliseconds) {
  var date = parse(dirtyDate)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds

