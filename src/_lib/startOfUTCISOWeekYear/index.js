import getUTCISOWeekYear from '../getUTCISOWeekYear/index.js'
import startOfUTCISOWeek from '../startOfUTCISOWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(year, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions)
  return date
}
