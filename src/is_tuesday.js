var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is Tuesday
 */
var isTuesday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday

