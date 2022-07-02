import toDate from '../toDate/index'
import differenceInMonths from '../differenceInMonths/index'
import compareAsc from '../compareAsc/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
export default function differenceInYears(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): number {
  requiredArgs(2, arguments)

  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  const sign = compareAsc(dateLeft, dateRight)
  if (sign === 0) {
    return 0
  }

  const diffMonths =
    sign === -1
      ? differenceInMonths(dateRight, dateLeft)
      : differenceInMonths(dateLeft, dateRight)

  if (diffMonths < 12) {
    return 0
  }

  return sign * Math.floor(diffMonths / 12)
}
