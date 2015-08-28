var addDays = require('./add_days')

/**
 * Sets day of week to passed date.
 * @param {date|string} dirtyDate
 * @param {number} day
 * @param {number} weekStartsAt
 * @returns {date} (new date)
 */
var setDay = function(dirtyDate, day, weekStartsAt) {
  var date = new Date(dirtyDate)
  var currentDay = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay

