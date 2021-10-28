import startOfISOWeek from '../startOfISOWeek/index'

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
 * @param date - the given date
 * @returns the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
export default function getISOWeekYear(date: Date | number): number {
  const dateClone = new Date(date)
  const year = dateClone.getFullYear()

  const fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  const fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (dateClone.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (dateClone.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
