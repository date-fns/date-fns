import { millisecondsInWeek } from '../../constants/index'
import toDate from '../../toDate/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import startOfUTCWeekYear from '../startOfUTCWeekYear/index'

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
  return Math.round(diff / millisecondsInWeek) + 1
}
