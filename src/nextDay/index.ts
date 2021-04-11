import requiredArgs from '../_lib/requiredArgs/index'
import getDay from '../getDay'
import addDays from '../addDays'
import toDate from '../toDate'
import { Day } from '../types'

const baseMap = [7, 6, 5, 4, 3, 2, 1]

/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */
export default function nextDay(date: Date | number, day: Day): Date {
  requiredArgs(2, arguments)
  const map = genMap(day)
  return addDays(toDate(date), map[getDay(toDate(date))])
}

function genMap(daysToMove: number): number[] {
  if (daysToMove === 0) {
    return baseMap
  } else {
    const mapStart = baseMap.slice(-daysToMove)
    const mapEnd = baseMap.slice(0, baseMap.length - daysToMove)
    return mapStart.concat(mapEnd)
  }
}
