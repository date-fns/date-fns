import startOfHour from '../startOfHour/index'

/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 */
export default function isSameHour(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftStartOfHour = startOfHour(dateLeft)
  const dateRightStartOfHour = startOfHour(dateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}
