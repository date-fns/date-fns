import startOfMinute from '../startOfMinute/index'

/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */
export default function isSameMinute(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftStartOfMinute = startOfMinute(dateLeft)
  const dateRightStartOfMinute = startOfMinute(dateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}
