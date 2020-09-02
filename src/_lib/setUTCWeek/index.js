import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import getUTCWeek from '../getUTCWeek/index'
import requiredArgs from '../requiredArgs/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var week = toInteger(dirtyWeek)
  var diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
