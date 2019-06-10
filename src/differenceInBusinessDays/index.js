import compareAsc from '../compareAsc/index.js'
import eachDayOfInterval from '../eachDayOfInterval/index.js'
import isValid from '../isValid/index.js'
import isWeekend from '../isWeekend/index.js'
import toDate from '../toDate/index.js'

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * var result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
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

  if (!isValid(dateLeft) || !isValid(dateRight)) return new Date(NaN)

  var sign = compareAsc(dateLeft, dateRight)
  var interval =
    sign > 0
      ? { start: dateRight, end: dateLeft }
      : { start: dateLeft, end: dateRight }

  var daysOfInterval = eachDayOfInterval(interval)
  var difference = daysOfInterval.filter(function(day) {
    return !isWeekend(day)
  })
  // Substruct 1 because interval contains both starting and ending dates
  var result = sign * (difference.length - 1)

  // Prevent negative zero
  return result === 0 ? 0 : result
}
