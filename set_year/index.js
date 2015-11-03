var parse = require('../parse')

/**
 * @category Year Helpers
 * @summary Set the year.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
var setYear = function(dirtyDate, year) {
  var date = parse(dirtyDate)
  date.setFullYear(year)
  return date
}

module.exports = setYear

