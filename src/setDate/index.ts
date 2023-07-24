import toDate from '../toDate/index'

/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param date - the date to be changed
 * @param dayOfMonth - the day of the month of the new date
 * @returns the new date with the day of the month set
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function setDate<DateType extends Date>(
  date: DateType | number,
  dayOfMonth: number
): DateType {
  const convertedDate = toDate(date)
  convertedDate.setDate(dayOfMonth)
  return convertedDate
}
