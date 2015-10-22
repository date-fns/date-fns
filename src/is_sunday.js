var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 */
var isSunday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday

