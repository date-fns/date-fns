import toDate from '../toDate/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'
import toInteger from '../_lib/toInteger/index.js'
import startOfMonth from '../startOfMonth/index.js'
import getDay from '../getDay/index.js'
import addDays from '../addDays/index.js'
import getDaysInMonth from '../getDaysInMonth/index.js'

var DAYS_IN_A_WEEK = 7

/**
 * @name getNthDayOfMonth
 * @category Month Helpers
 * @summary Get the nth weekday for a date
 *
 * @description
 * Get then nth weekday in a month of the given date, day and week.
 *
 * @param {Date|Number} date - the given date
 * @param {Number} day - the given day to be found in the month
 * @param {Date|Number} week - the given week to be calculated *
 * @returns {Date} the date of nth day of the month
 * @throws {TypeError} 3 argument required
 * @throws {RangeError}  day is between 0 and 6 _and_ is not NaN
 * @throws {RangeError}  the day calulated should not exceed the given month
 *
 *
 *
 * @example
 * // What is the 3rd Wednesday of 12 July 2020?
 * var result = getNthDayOfMonth(new Date(2020, 6, 12))
 * //=> new Date(2020, 6, 15)
 */
export default function getNthDayOfMonth(dirtyDate, dirtyDay, dirtyWeek) {
  requiredArgs(3, arguments)

  var date = toDate(dirtyDate)
  var day = toInteger(dirtyDay)

  // Test if day is between 0 and 6 _and_ is not NaN
  if (!(day >= 0 && day <= 6)) {
    throw new RangeError('day must be between 0 and 6 inclusively')
  }

  var week = toInteger(dirtyWeek)
  var startOfMonthVal = startOfMonth(date)
  var daysToBeAdded =
    (week - 1) * DAYS_IN_A_WEEK +
    ((DAYS_IN_A_WEEK + day - getDay(startOfMonthVal)) % DAYS_IN_A_WEEK)
  var nthDayOfMonth = addDays(startOfMonthVal, daysToBeAdded)

  //Test if the days to be added excees the current month
  if (daysToBeAdded >= getDaysInMonth(date)) {
    throw new RangeError('the nth day exceeds the month')
  }

  return nthDayOfMonth
}
