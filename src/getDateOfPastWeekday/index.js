import addDays from '../addDays/index.js'

/**
 * @name getDateOfPastWeekday
 * @category Weekday Helpers
 * @summary Get date of the desired past day of the week.
 *
 * @description
 * Get date of the desired past day of the week
 *
 * @param {Number} dayOfWeekNumber - the index of a desired day of week (0 - Sunday)
 * @returns {Date} the date of the last day of week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `dayOfWeekNumber` must be >= 0 and <=6
 * @example
 * // What is the last Monday date?
 * // Today is Nov 22, 2017
 * var result = getDateOfLastDayOfWeek(1)
 * // => Mon Nov 20 2017 00:00:00
 */
export default function getDateOfPastWeekday (dayOfWeekNumber, dateForTest) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (dayOfWeekNumber < 0 || dayOfWeekNumber > 6) {
    throw new RangeError('The index of day of the week should be greater or equal 0 and less than 7')
  }
  var today = new Date()

  if (dateForTest !== undefined && dateForTest instanceof Date) { today = dateForTest }
  // Take current day of week index where 0 - Sunday
  var index = today.getDay()
  // If desired day of the week in the past then take date for this week
  // Otherwise take date form the previous week
  var date = index > dayOfWeekNumber ? addDays(today, -index + dayOfWeekNumber) : addDays(today, -index + dayOfWeekNumber - 7)
  date.setHours(0, 0, 0, 0)
  return date
}
