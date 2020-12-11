import subDays from '../subDays/index'
import subMonths from '../subMonths/index'
import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'
import toInteger from '../_lib/toInteger/index'
import { Duration } from '../types'

/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
export default function sub(dirtyDate: number | Date, duration: Duration) {
  requiredArgs(2, arguments)

  if (!duration || typeof duration !== 'object') return new Date(NaN)

  const years = 'years' in duration ? toInteger(duration.years) : 0
  const months = 'months' in duration ? toInteger(duration.months) : 0
  const weeks = 'weeks' in duration ? toInteger(duration.weeks) : 0
  const days = 'days' in duration ? toInteger(duration.days) : 0
  const hours = 'hours' in duration ? toInteger(duration.hours) : 0
  const minutes = 'minutes' in duration ? toInteger(duration.minutes) : 0
  const seconds = 'seconds' in duration ? toInteger(duration.seconds) : 0

  // Subtract years and months
  const dateWithoutMonths = subMonths(toDate(dirtyDate), months + years * 12)

  // Subtract weeks and days
  const dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7)

  // Subtract hours, minutes and seconds
  const minutestoSub = minutes + hours * 60
  const secondstoSub = seconds + minutestoSub * 60
  const mstoSub = secondstoSub * 1000
  const finalDate = new Date(dateWithoutDays.getTime() - mstoSub)

  return finalDate
}
