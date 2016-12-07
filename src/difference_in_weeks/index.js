import differenceInDays from '../difference_in_days/index.js'

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 5),
 *   new Date(2014, 6, 20)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight, options) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight, options) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

export default differenceInWeeks
