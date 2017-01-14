import getISOYear from '../get_iso_year/index.js'
import startOfISOWeek from '../start_of_iso_week/index.js'

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 * */
export default function startOfISOYear (dirtyDate, options) {
  var year = getISOYear(dirtyDate, options)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary, options)
  return date
}

