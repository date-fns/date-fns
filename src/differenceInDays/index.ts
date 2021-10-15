import differenceInCalendarDays from '../differenceInCalendarDays/index'

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight) / 24) | 0`.
 *
 * @param dateLeft - the later date
 * @param dateRight - the earlier date
 * @returns the number of full days according to the local timezone
 *
 * @example
 * // How many full days are between 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * 
 * @example
 * // How many full days are between 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * 
 * @example
 * // How many full days are between 1 March 2020 0:00 and 1 June 2020 0:00?
 * //
 * // Note: because local time is used, the result will always be 92 days, even
 * // in time zones where DST starts and the period has only 92 * 24 - 1 hours.
 * differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */
export default function differenceInDays(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  const dateLeftClone = new Date(dateLeft)
  const dateRightObj = new Date(dateRight)

  const sign = compareLocalAsc(dateLeftClone, dateRightObj)
  const difference = Math.abs(
    differenceInCalendarDays(dateLeftClone, dateRight)
  )

  dateLeftClone.setDate(dateLeftClone.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(dateLeftClone, dateRightObj) === -sign
  )
  const result = sign * (difference - isLastDayNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft: Date, dateRight: Date): number {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds()

  if (diff < 0) {
    return -1
  } else if (diff > 0) {
    return 1
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff
  }
}
