import eachDayOfInterval from '../eachDayOfInterval/index'
import isSunday from '../isSunday/index'
import isWeekend from '../isWeekend/index'
import type { Interval } from '../types'

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param interval - the given interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns an array containing all the Saturdays and Sundays
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
export default function eachWeekendOfInterval<DateType extends Date>(
  interval: Interval<DateType>
): DateType[] {
  const dateInterval = eachDayOfInterval(interval)
  const weekends = []
  let index = 0
  while (index < dateInterval.length) {
    const date = dateInterval[index++]
    if (isWeekend(date)) {
      weekends.push(date)
      if (isSunday(date)) index = index + 5
    }
  }
  return weekends
}
