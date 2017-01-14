import toDate from '../to_date/index.js'
import differenceInCalendarISOYears from '../difference_in_calendar_iso_years/index.js'
import compareDesc from '../compare_desc/index.js'
import subISOYears from '../sub_iso_years/index.js'

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the earlier date
 * @param {Date|String|Number} dateRight - the later date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2010, 0, 1),
 *   new Date(2012, 0, 1)
 * )
 * //=> 1
 * */
export default function differenceInISOYears (dirtyDateLeft, dirtyDateRight, options) {
  var dateLeft = toDate(dirtyDateLeft, options)
  var dateRight = toDate(dirtyDateRight, options)

  var sign = compareDesc(dateLeft, dateRight, options)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight, options))

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  dateRight = subISOYears(dateRight, sign * difference, options)
  var isLastISOYearNotFull = compareDesc(dateLeft, dateRight, options) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

