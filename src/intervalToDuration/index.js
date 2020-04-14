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
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Get the Duration between 2 dates in an Interval Object
 *
 * @param {Interval} interval The Interval Object
 *
 * @returns {Duration} The Duration Object
 * @throws {TypeError} Requires 2 Arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the Duration between January 15, 1929 and April 4, 1968.
 * const result = intervalToDuration({
 *     new Date(1929, 0, 15, 12, 0, 0),
 *     new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */

export default function intervalToDuration({ start, end }) {
  requiredArgs(1, arguments)

  const dateLeft = toDate(start)
  const dateRight = toDate(end)

  if (!isValid(dateLeft)) {
    throw new RangeError('Start Date is invalid')
  }
  if (!isValid(dateRight)) {
    throw new RangeError('End Date is invalid')
  }

  const duration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  const sign = compareAsc(dateLeft, dateRight)

  duration.years = Math.abs(differenceInYears(dateLeft, dateRight))

  const remainingMonths = sub(dateLeft, { years: sign * duration.years })
  duration.months = Math.abs(differenceInMonths(remainingMonths, dateRight))

  const remainingDays = sub(remainingMonths, { months: sign * duration.months })
  duration.days = Math.abs(differenceInDays(remainingDays, dateRight))

  const remainingHours = sub(remainingDays, { days: sign * duration.days })
  duration.hours = Math.abs(differenceInHours(remainingHours, dateRight))

  const remainingMinutes = sub(remainingHours, { hours: sign * duration.hours })
  duration.minutes = Math.abs(differenceInMinutes(remainingMinutes, dateRight))

  const remainingSeconds = sub(remainingMinutes, {
    minutes: sign * duration.minutes
  })
  duration.seconds = Math.abs(differenceInSeconds(remainingSeconds, dateRight))

  return duration
}
