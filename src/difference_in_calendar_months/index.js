import toDate from '../to_date/index.js'

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 0, 31),
 *   new Date(2014, 8, 1)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeft = toDate(dirtyDateLeft, options)
  var dateRight = toDate(dirtyDateRight, options)

  var yearDiff = dateRight.getFullYear() - dateLeft.getFullYear()
  var monthDiff = dateRight.getMonth() - dateLeft.getMonth()

  return yearDiff * 12 + monthDiff
}

export default differenceInCalendarMonths
