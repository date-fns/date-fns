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
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsAt=0] - the index of the first day of a week (0 - sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsAt: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, day, options) {
  var weekStartsAt = options ? (options.weekStartsAt || 0) : 0
  var date = parse(dirtyDate)
  var currentDay = date.getDay()
  var diff = (day < weekStartsAt ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay

