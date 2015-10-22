var parse = require('./parse')

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
 */
var addSeconds = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setSeconds(date.getSeconds() + amount)
  return date
}

module.exports = addSeconds

