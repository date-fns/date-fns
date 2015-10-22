var parse = require('./parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 */
var isThursday = function(dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday

