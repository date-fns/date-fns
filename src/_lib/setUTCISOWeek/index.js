import toInteger from '../toInteger/index.js'
import toDate from '../../toDate/index.js'
import getUTCISOWeek from '../getUTCISOWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)
  var isoWeek = toInteger(dirtyISOWeek)
  var diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
