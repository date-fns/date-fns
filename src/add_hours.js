var parse = require('./parse')

/**
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of hours to be added
 * @returns {Date} new date with the hours added
 */
var addHours = function(dirtyDate, amount) {
  var date = parse(dirtyDate)
  date.setHours(date.getHours() + amount)
  return date
}

module.exports = addHours

