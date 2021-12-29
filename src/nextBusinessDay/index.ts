import { addDays, isEqual, isWeekend, startOfDay, toDate } from '..'

/**
 * @name nextBusinessDay
 * @category Day Helpers
 * @summary When is the next business day?
 *
 * @description Returns the next business day (Mon - Fri)
 *
 * @param {Date|Number} date - the initial date
 * @param {Number} [startFromDay=0] - the day that it starts counting from with 0 as a default value.
 * To start counting from the next date set this to 1.
 *
 * @param {[Date]} excludeDates - an array of dates to exclude e.g. holidays.
 * @returns {Date} the next business day
 * @throws {TypeError} startFrom can't be a negative number
 *
 * @example
 * // When is the next business day after July, 4 2021
 * const result = nextBusinessDay(new Date(2021, 6, 4))
 * //=> Mon Jul 05 2021 00:00:00
 *
 * // When is the next business day after September, 6 2021 with an excluded day?
 * const holidays = [new Date(2021, 8, 7)] // September, 7 - Brazil Independence Day
 * const result = nextBusinessDay(new Date(2021, 8, 6), 1, holidays)
 * //=> Wed Sep 8 2021 00:00:00
 */

export default function nextBusinessDay(
  dirtyDate: Date | number,
  startFromDay = 0,
  excludeDates: Array<Date | number> = []
): Date {
  const date = startOfDay(toDate(dirtyDate))

  if (startFromDay < 0)
    throw new TypeError("startFrom can't be a negative number")

  const initialDate = addDays(date, startFromDay)

  const isOnTheExcludeDatesList = () => {
    if (excludeDates.length === 0) return false

    return excludeDates.some((excludeDate) =>
      isEqual(initialDate, startOfDay(excludeDate))
    )
  }

  if (!isWeekend(initialDate) && !isOnTheExcludeDatesList()) return initialDate

  return nextBusinessDay(addDays(initialDate, 1), 0, excludeDates)
}
