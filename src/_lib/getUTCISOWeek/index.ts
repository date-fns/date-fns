import toDate from '../../toDate/index'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index'
import startOfUTCISOWeekYear from '../startOfUTCISOWeekYear/index'
import requiredArgs from '../requiredArgs/index'

const MILLISECONDS_IN_WEEK = 604800000

export default function getUTCISOWeek(dirtyDate: Date | number) {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const diff =
    startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
