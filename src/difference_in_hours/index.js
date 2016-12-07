import differenceInMilliseconds from '../difference_in_milliseconds/index.js'

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 6, 50),
 *   new Date(2014, 6, 2, 19, 0)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight, options) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight, options) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

export default differenceInHours
