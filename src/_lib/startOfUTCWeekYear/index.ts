import getUTCWeekYear from '../getUTCWeekYear/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import { WeekYearFnOptions } from '../../types.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeekYear(
  dirtyDate: Date | number,
  options: WeekYearFnOptions = {}
) {
  const firstWeekContainsDate =
    options.firstWeekContainsDate ??
    options.locale?.options?.firstWeekContainsDate ??
    1

  const year = getUTCWeekYear(dirtyDate, options)
  const firstWeek = new Date(0)
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  const date = startOfUTCWeek(firstWeek, options)
  return date
}
