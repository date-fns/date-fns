var parse = require('../parse')
var addDays = require('../add_days')

/**
 * @category Weekday Helpers
 * @summary Set the day of the week.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Number} [weekStartsAt=0] - the index of the first day of a week (0 - sunday)
 * @returns {Date} new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 */
var setDay = function(dirtyDate, day, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0
  var date = parse(dirtyDate)
  var currentDay = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay

