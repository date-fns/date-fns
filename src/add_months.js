/**
 * Adds specified number of months to passed date.
 * @param {data|string} dirtyDate
 * @param {number} amount
 * @returns {date} new date
 */
var addMonths = function(dirtyDate, amount) {
  var date = new Date(dirtyDate)
  var desiredMonth = date.getMonth() + amount
  var daysInDesiredMonth = new Date(Date.UTC(date.getFullYear(), desiredMonth + 1, 0)).getUTCDate()

  date.setDate(Math.min(daysInDesiredMonth, date.getDate()))
  date.setMonth(desiredMonth)
  return date
}

module.exports = addMonths

