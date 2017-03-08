import toDate from '../../../toDate/index.js'
import startOfUTCISOYear from '../startOfUTCISOYear/index.js'

var MILLISECONDS_IN_DAY = 86400000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setISOYear (dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var isoYear = Number(dirtyISOYear)
  var dateStartOfYear = startOfUTCISOYear(date, dirtyOptions)
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  date = startOfUTCISOYear(fourthOfJanuary, dirtyOptions)
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
