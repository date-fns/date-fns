/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param date - the date to be changed
 * @param milliseconds - the milliseconds of the new date
 * @returns the new date with the milliseconds set
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
export default function setMilliseconds(
  date: Date | number,
  milleseconds: number
): Date {
  const result = new Date(date)
  const millisecondsTransformed = Math.trunc(milleseconds)
  result.setMilliseconds(millisecondsTransformed)
  return result
}
