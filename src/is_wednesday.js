var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 */
var isWednesday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday

