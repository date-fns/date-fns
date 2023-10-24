import constructFrom from '../constructFrom/index'
import startOfISOWeek from '../startOfISOWeek/index'
import toDate from '../toDate/index'

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
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
export default function getISOWeekYear<DateType extends Date>(
  date: DateType | number
): number {
  const _date = toDate(date)
  const year = _date.getFullYear()

  const fourthOfJanuaryOfNextYear = constructFrom(date, 0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  const fourthOfJanuaryOfThisYear = constructFrom(date, 0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
