var parse = require('./parse')

/**
 * Return the array of dates within the specified range.
 * @param {Date|String|Number} dirtyStartDate - the start of range
 * @param {Date|String|Number} dirtyEndDate - the end of range
 * @returns {Date[]} array of dates for every day of the range
 */
var eachDay = function(dirtyStartDate, dirtyEndDate) {
  var endTime = parse(dirtyEndDate).getTime()
  var dates = []

  var currentDate = parse(dirtyStartDate)
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay

