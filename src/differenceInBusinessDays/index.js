import toDate from '../toDate/index.js'
import eachDayOfInterval from '../eachDayOfInterval/index.js'
import isWeekend from '../isWeekend/index.js'

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 Januari 2014 and 20 July 2014?
 * var result = differenceInBusinessDays(
 *   new Date(2014, 0, 10)
 *   new Date(2014, 6, 20),
 * )
 * //=> 136
 */
export default function differenceInBusinessDays(
  dirtyDateLeft,
  dirtyDateRight
) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  var interval = { start: dateLeft, end: dateRight }

  var daysOfInterval = eachDayOfInterval(interval)
  var difference = daysOfInterval.filter(function(day) {
    return !isWeekend(toDate(day))
  })
  var result = difference.length

  // Prevent negative zero
  return difference.length === 0 ? 0 : difference.length
}
