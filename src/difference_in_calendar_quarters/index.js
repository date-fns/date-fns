import getQuarter from '../get_quarter/index.js'
import toDate from '../to_date/index.js'

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2013, 11, 31),
 *   new Date(2014, 6, 2)
 * )
 * //=> 3
 * */
export default function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeft = toDate(dirtyDateLeft, options)
  var dateRight = toDate(dirtyDateRight, options)

  var yearDiff = dateRight.getFullYear() - dateLeft.getFullYear()
  var quarterDiff = getQuarter(dateRight, options) - getQuarter(dateLeft, options)

  return yearDiff * 4 + quarterDiff
}

