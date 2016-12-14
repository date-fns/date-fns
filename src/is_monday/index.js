var parse = require('../parse/index.js')

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate, options) {
  return parse(dirtyDate, options).getDay() === 1
}

module.exports = isMonday
