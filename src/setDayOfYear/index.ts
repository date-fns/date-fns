/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param date - the date to be changed
 * @param dayOfYear - the day of the year of the new date
 * @returns the new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * const result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
export default function setDayOfYear(
  date: Date | number,
  dayOfYear: number
): Date {
  const result = new Date(date)
  const dayOfYearTransformed = Math.trunc(dayOfYear)
  result.setMonth(0)
  result.setDate(dayOfYearTransformed)
  return result
}
