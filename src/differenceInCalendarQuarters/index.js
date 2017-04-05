import getQuarter from '../getQuarter/index.js'
import toDate from '../toDate/index.js'

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} the number of calendar quarters
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2013, 11, 31),
 *   new Date(2014, 6, 2)
 * )
 * //=> 3
 */
export default function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeft = toDate(dirtyDateLeft, dirtyOptions)
  var dateRight = toDate(dirtyDateRight, dirtyOptions)

  var yearDiff = dateRight.getFullYear() - dateLeft.getFullYear()
  var quarterDiff = getQuarter(dateRight, dirtyOptions) - getQuarter(dateLeft, dirtyOptions)

  return yearDiff * 4 + quarterDiff
}
