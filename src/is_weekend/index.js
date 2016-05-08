var parse = require('../parse')

/**
 * @category Weekday Helpers
 * @summary Is the given date in a weekend?
 *
 * @description
 * Is the given date in a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the weekend
 *
 * @example
 * // Is 5 October 2014 in a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend
