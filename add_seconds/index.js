var parse = require('../parse')

/**
 * @category Second Helpers
 * @summary Add the seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
var addSeconds = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setSeconds(date.getSeconds() + amount)
  return date
}

module.exports = addSeconds

