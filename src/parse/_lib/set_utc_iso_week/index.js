import toDate from '../../../to_date/index.js'
import getUTCISOWeek from '../get_utc_iso_week/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeek (dirtyDate, isoWeek, options) {
  var date = toDate(dirtyDate, options)
  var diff = getUTCISOWeek(date, options) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
