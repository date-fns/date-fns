/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param date - the date to be changed
 * @param seconds - the seconds of the new date
 * @returns the new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
export default function setSeconds(date: Date | number, seconds: number): Date {
  const result = new Date(date)
  const secondsTransformed = Math.trunc(seconds)
  result.setSeconds(secondsTransformed)
  return result
}
