import startOfSecond from '../startOfSecond/index'

/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
export default function isSameSecond(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftStartOfSecond = startOfSecond(dateLeft)
  const dateRightStartOfSecond = startOfSecond(dateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}
