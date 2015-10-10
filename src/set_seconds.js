var parse = require('./parse')

/**
 * @category Second Helpers
 * @summary Set the seconds.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} seconds of the new date
 * @returns {Date} new date with the seconds setted
 */
var setSeconds = function(dirtyDate, seconds) {
  var date = parse(dirtyDate)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds

