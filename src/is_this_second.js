var isSameSecond = require('./is_same_second')

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 */
var isThisSecond = function(dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond

