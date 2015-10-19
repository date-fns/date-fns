var parse = require('./parse')

/**
 * @category Hour Helpers
 * @summary Set the hours.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} hours of the new date
 * @returns {Date} new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
var setHours = function(dirtyDate, hours) {
  var date = parse(dirtyDate)
  date.setHours(hours)
  return date
}

module.exports = setHours

