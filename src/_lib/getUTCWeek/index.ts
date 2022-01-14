import toDate from '../../toDate/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import startOfUTCWeekYear from '../startOfUTCWeekYear/index'
import requiredArgs from '../requiredArgs/index'
import type {
  LocaleOptions,
  WeekStartOptions,
  FirstWeekContainsDateOptions,
} from '../../types'

const MILLISECONDS_IN_WEEK = 604800000

export default function getUTCWeek(
  dirtyDate: Date | number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const diff =
    startOfUTCWeek(date, options).getTime() -
    startOfUTCWeekYear(date, options).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
