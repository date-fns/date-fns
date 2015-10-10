var parse = require('./parse')
var addDays = require('./add_days')

/**
 * @category Day Helpers
 * @summary Set the day of the week.
 *
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} day of the new date
 * @param {Number} [weekStartsAt=0] the index of the first day of a week (0 - sunday)
 * @returns {Date} new date with the day of the week setted
 */
var setDay = function(dirtyDate, day, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0
  var date = parse(dirtyDate)
  var currentDay = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay

