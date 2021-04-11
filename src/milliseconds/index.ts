import requiredArgs from '../_lib/requiredArgs/index'
import { Duration } from '../types'

// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
const yearInDays = 365.2425

/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */
export default function milliseconds({
  years,
  months,
  weeks,
  days,
  hours,
  minutes,
  seconds,
}: Duration): number {
  requiredArgs(1, arguments)

  let totalDays = 0

  if (years) totalDays += years * yearInDays
  if (months) totalDays += months * (yearInDays / 12)
  if (weeks) totalDays += weeks * 7
  if (days) totalDays += days

  let totalSeconds = totalDays * 24 * 60 * 60

  if (hours) totalSeconds += hours * 60 * 60
  if (minutes) totalSeconds += minutes * 60
  if (seconds) totalSeconds += seconds

  return Math.round(totalSeconds * 1000)
}
