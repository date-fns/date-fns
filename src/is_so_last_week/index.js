var isSameWeek = require('../is_same_week/index.js')
var addWeeks = require('../add_weeks/index.js')

/**
 * @category Week Helpers
 * @summary Is the given date so last week?
 *
 * @description
 * Is the given date so last week?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Options} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} so last week
 *
 * @example
 * // Is 7 December 2016 so last week?
 * var result = isSoLastWeek(
 *   new Date(2016, 12, 7)
 * )
 * //=> true
 */
function isSoLastWeek (dirtyDate, options) {
  return isSameWeek(new Date(), addWeeks(dirtyDate, 1), options)
}

module.exports = isSoLastWeek
