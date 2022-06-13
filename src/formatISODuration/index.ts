import type { Duration } from '../types'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration - the duration to format
 * @param {boolean} removeZeros - if true, values with 0 are removed from the formatted string
 *
 * @returns {String} The ISO 8601 duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 *
 * @example
 * // Format the given duration as ISO 8601 string with trailing zeros removed
 * const result = formatISODuration({
 *   years: 39,
 *   months: 0,
 *   days: 0,
 *   hours: 7
 * });
 * //=> 'P39Y7H'
 */
export default function formatISODuration(
  duration: Duration,
  removeZeros: boolean = false
): string {
  requiredArgs(1, arguments)

  if (typeof duration !== 'object')
    throw new Error('Duration must be an object')

  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration

  if (removeZeros === true) {
    const chunks = [
      { suffix: 'Y', value: years },
      { suffix: 'M', value: months },
      { suffix: 'DT', value: days },
      { suffix: 'H', value: hours },
      { suffix: 'M', value: minutes },
      { suffix: 'S', value: seconds },
    ]

    if (
      years === 0 &&
      months === 0 &&
      days === 0 &&
      hours === 0 &&
      seconds === 0 &&
      minutes !== 0
    ) {
      // Remove ambiguity between months/minutes when only minutes are present
      return `PT${minutes}M`
    } else {
      return (
        'P' +
        chunks
          .filter(({ value }) => value > 0)
          .map(({ suffix, value }) => `${value}${suffix}`)
          .join('')
      )
    }
  } else {
    return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`
  }
}
