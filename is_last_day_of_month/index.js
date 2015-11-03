var parse = require('../parse')
var endOfDay = require('../end_of_day')
var endOfMonth = require('../end_of_month')

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
var isLastDayOfMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() == endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth

