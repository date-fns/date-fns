var parse = require('../parse')

/**
 * @category Second Helpers
 * @summary Set the seconds.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
var setSeconds = function(dirtyDate, seconds) {
  var date = parse(dirtyDate)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds

