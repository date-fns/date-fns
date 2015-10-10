var parse = require('./parse')

/**
 * @category Month Helpers
 * @summary Get the month.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} month
 */
var getMonth = function(dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth

