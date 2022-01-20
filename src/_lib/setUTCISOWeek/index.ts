import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import getUTCISOWeek from '../getUTCISOWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function setUTCISOWeek(
  dirtyDate: Date | number,
  dirtyISOWeek: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const isoWeek = toInteger(dirtyISOWeek)
  const diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
