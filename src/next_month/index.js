var parse = require('../parse/index.js')
var getMonth = require('../get_month/index.js')

/**
 * @category Month Helpers
 * @summary return the previous month of the given date
 *
 * @description
 * Return the next month of the given date.
 *
 * @returns {Number} the previous month
 *
 * @example
 * // Which is previous month from 13 Januray 2017?
 * var result = nextMonth(new Date(2012, 12, 25));
 * // => 0
 */
function nextMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = getMonth(date)
  var nextMonth = (month === 11) ? 0 : month + 1

  return nextMonth
}

module.exports = nextMonth
