var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 */
var isMonday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday

