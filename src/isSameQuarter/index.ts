import startOfQuarter from '../startOfQuarter/index'

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param dateLeft - the first date to check
 * @param dateRight - the second date to check
 * @returns the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 */
export default function isSameQuarter(
  dateLeft: Date | number,
  dateRight: Date | number
): boolean {
  const dateLeftStartOfQuarter = startOfQuarter(dateLeft)
  const dateRightStartOfQuarter = startOfQuarter(dateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}
