import toDate from '../toDate/index'
import getTime from '../getTime/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
export default function differenceInMilliseconds(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  requiredArgs(2, arguments)

  const timestampLeft = getTime(dateLeft)
  const timestampRight = getTime(dateRight)

  if (!Number.isNaN(timestampLeft) && !Number.isNaN(timestampRight)) {
    return timestampLeft - timestampRight
  }

  return toDate(dateLeft).getTime() - toDate(dateRight).getTime()
}
