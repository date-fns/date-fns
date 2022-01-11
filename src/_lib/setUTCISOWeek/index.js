import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import getUTCISOWeek from '../getUTCISOWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
