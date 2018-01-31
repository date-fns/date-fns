import toDate from '../../toDate/index.js'
import startOfUTCISOWeekYear from '../startOfUTCISOWeekYear/index.js'

var MILLISECONDS_IN_DAY = 86400000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeekYear (dirtyDate, dirtyISOWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions)
  var isoWeekYear = Number(dirtyISOWeekYear)
  var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions)
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions)
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
