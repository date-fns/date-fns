import toDate from '../../../toDate/index.js'
import startOfUTCISOYear from '../startOfUTCISOYear/index.js'

var MILLISECONDS_IN_DAY = 86400000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setISOYear (dirtyDate, isoYear, options) {
  var date = toDate(dirtyDate, options)
  var dateStartOfYear = startOfUTCISOYear(date, options)
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  date = startOfUTCISOYear(fourthOfJanuary, options)
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
