import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'

export default function startOfUTCISOWeek(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const weekStartsOn = 1

  const date = toDate(dirtyDate)
  const day = date.getUTCDay()
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}
