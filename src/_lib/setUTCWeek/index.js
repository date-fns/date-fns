import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import getUTCWeek from '../getUTCWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
