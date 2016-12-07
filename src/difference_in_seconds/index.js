import differenceInMilliseconds from '../difference_in_milliseconds/index.js'

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 7, 999),
 *   new Date(2014, 6, 2, 12, 30, 20, 0)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight, options) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight, options) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

export default differenceInSeconds
