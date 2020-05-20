import toDate from '../../toDate/index.js'
import startOfUTCWeek from '../startOfUTCWeek/index.js'
import { WeekYearFnOptions } from '../../types.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCWeekYear(
  dirtyDate: Date | number,
  options: WeekYearFnOptions
): number {
  const date = toDate(dirtyDate)
  const year = date.getUTCFullYear()

  const firstWeekContainsDate =
    options.firstWeekContainsDate ??
    options.locale?.options?.firstWeekContainsDate ??
    1

  const firstWeekOfNextYear = new Date(0)
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0)
  const startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options)

  const firstWeekOfThisYear = new Date(0)
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0)
  const startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
