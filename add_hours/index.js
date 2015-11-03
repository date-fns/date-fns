var parse = require('../parse')

/**
 * @category Hour Helpers
 * @summary Add hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
var addHours = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setHours(date.getHours() + amount)
  return date
}

module.exports = addHours

