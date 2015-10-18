/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59
 */
var endOfYesterday = function() {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  return new Date(year, month, day - 1, 23, 59, 59, 999)
}

module.exports = endOfYesterday
