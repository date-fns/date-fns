var parse = require('./parse')

/**
 * Returns array of dates withtin specified range.
 * @param {date|string} dirtyStart
 * @param {date|string} dirtyEnd
 * @returns {date[]}
 */
var eachDay = function(dirtyStart, dirtyEnd) {
  var endTime = parse(dirtyEnd).getTime()
  var dates = []

  var currentDate = parse(dirtyStart)
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay

