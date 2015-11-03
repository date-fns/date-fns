var parse = require('../parse')

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
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
var setMilliseconds = function(dirtyDate, milliseconds) {
  var date = parse(dirtyDate)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds

