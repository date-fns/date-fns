var parse = require('./parse')

/**
 * @category Hour Helpers
 * @summary Get the hours.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} hours
 */
var getHours = function(dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours

