var endOfDay = require('../end_of_day')

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59
 */
var endOfToday = function() {
  return endOfDay(new Date())
}

module.exports = endOfToday
