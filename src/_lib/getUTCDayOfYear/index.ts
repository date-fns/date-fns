import { millisecondsInDay } from '../../constants/index'
import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'

export default function getUTCDayOfYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const timestamp = date.getTime()
  date.setUTCMonth(0, 1)
  date.setUTCHours(0, 0, 0, 0)
  const startOfYearTimestamp = date.getTime()
  const difference = timestamp - startOfYearTimestamp
  return Math.floor(difference / millisecondsInDay) + 1
}
