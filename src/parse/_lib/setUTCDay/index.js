import toDate from '../../../toDate/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (dirtyOptions.weekStartsOn || 0) : 0
  var date = toDate(dirtyDate, dirtyOptions)
  var day = Number(dirtyDay)

  var currentDay = date.getUTCDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
