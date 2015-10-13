var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is Saturday
 */
var isSaturday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday

