var parse = require('../parse/index.js')

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options. See [options]{@link docs/types/options}
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate, options) {
  return parse(dirtyDate, options).getTime() < new Date().getTime()
}

module.exports = isPast
