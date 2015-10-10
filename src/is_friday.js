var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is Friday
 */
var isFriday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday

