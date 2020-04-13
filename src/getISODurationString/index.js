import compareAsc from '../compareAsc/index.js'
import differenceInYears from '../differenceInYears/index.js'
import differenceInMonths from '../differenceInMonths/index.js'
import differenceInDays from '../differenceInDays/index.js'
import differenceInHours from '../differenceInHours/index.js'
import differenceInMinutes from '../differenceInMinutes/index.js'
import differenceInSeconds from '../differenceInSeconds/index.js'
import isValid from '../isValid/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'
import toDate from '../toDate/index.js'
import sub from '../sub/index.js'

/**
 * @name getISODurationString
 * @category Common Helpers
 * @summary Get the duration between 2 dates according to ISO 8601 Duration standards (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Date} dirtyDateLeft
 * @param {Date} dirtyDateRight
 *
 * @returns {String} The ISO 8601 Duration string
 * @throws {TypeError} Requires 2 Arguments
 * @throws {RangeError} `dateLeft` must not be Invalid Date
 * @throws {RangeError} `dateRight` must not be Invalid Date
 *
 * @example
 * // Get the ISO 8601 Duration between January 15, 1929 and April 4, 1968.
 * const result = getISODurationString(
 *     new Date(1929, 0, 15, 12, 0, 0),
 *     new Date(1968, 3, 4, 19, 5, 0)
 * )
 * // => 'P39Y2M20DT0H0M0S'
 */

export default function getISODurationString(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  const dateLeft = toDate(dirtyDateLeft)
  const dateRight = toDate(dirtyDateRight)

  if (!isValid(dateLeft)) {
    throw new RangeError('Left Date is invalid')
  }
  if (!isValid(dateRight)) {
    throw new RangeError('Right Date is invalid')
  }

  const sign = compareAsc(dateLeft, dateRight)

  const Years = Math.abs(differenceInYears(dateLeft, dateRight))

  const remainingMonths = sub(dateLeft, { years: sign * Years })
  const Months = Math.abs(differenceInMonths(remainingMonths, dateRight))

  const remainingDays = sub(remainingMonths, { months: sign * Months })
  const Days = Math.abs(differenceInDays(remainingDays, dateRight))

  const remainingHours = sub(remainingDays, { days: sign * Days })
  const Hours = Math.abs(differenceInHours(remainingHours, dateRight))

  const remainingMinutes = sub(remainingHours, { hours: sign * Hours })
  const Minutes = Math.abs(differenceInMinutes(remainingMinutes, dateRight))

  const remainingSeconds = sub(remainingMinutes, { minutes: sign * Minutes })
  const Seconds = Math.abs(differenceInSeconds(remainingSeconds, dateRight))

  return `P${Years}Y${Months}M${Days}DT${Hours}H${Minutes}M${Seconds}S`
}
