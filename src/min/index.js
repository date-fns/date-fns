import toDate from '../toDate/index.js'

/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
export default function min (datesArray, options) {
  var dates = datesArray.map(function (dirtyDate) {
    return toDate(dirtyDate, options)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}
