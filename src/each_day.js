var parse = require('./parse')

/**
 * Return the array of dates within the specified range.
 * @param {Date|String|Number} dirtyStartDate - the start of range
 * @param {Date|String|Number} dirtyEndDate - the end of range
 * @returns {Date[]} array of dates for every day of the range
 * @throws {InvalidArgumentException} Argument dirtyStartDate must be before dirtyEndDate
 */
var eachDay = function(dirtyStartDate, dirtyEndDate) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    var err = new Error('Argument dirtyStartDate must be before dirtyEndDate')
    err.name = 'InvalidArgumentException'
    throw err
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay

