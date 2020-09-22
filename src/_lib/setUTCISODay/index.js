import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments)

  var day = toInteger(dirtyDay)

  if (day % 7 === 0) {
    day = day - 7
  }

  var weekStartsOn = 1
  var date = toDate(dirtyDate)
  var currentDay = date.getUTCDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
