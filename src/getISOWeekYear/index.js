import toDate from '../toDate/index.js'
import startOfISOWeek from '../startOfISOWeek/index.js'

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
export default function getISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
