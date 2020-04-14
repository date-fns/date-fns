import requiredArgs from '../_lib/requiredArgs/index.js'

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a Duration Object according to ISO 8601 Duration standards (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration
 *
 * @returns {String} The ISO 8601 Duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Get the ISO 8601 Duration between January 15, 1929 and April 4, 1968.
 * const result = formatISODuration({ years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 })
 * // => 'P39Y2M20DT0H0M0S'
 */

export default function formatISODuration(duration) {
  requiredArgs(1, arguments)

  if (typeof duration !== 'object')
    throw new Error('Duration must be an object')

  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration

  return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`
}
