/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param date - the date to be changed
 * @param minutes - the minutes of the new date
 * @returns the new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
export default function setMinutes(date: Date | number, minutes: number): Date {
  const result = new Date(date)
  const transformedMinutes = Math.trunc(minutes)
  result.setMinutes(transformedMinutes)
  return result
}
