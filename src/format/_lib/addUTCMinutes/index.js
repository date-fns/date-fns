import toDate from '../../../toDate/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function addUTCMinutes (dirtyDate, amount, options) {
  var date = toDate(dirtyDate, options)
  date.setUTCMinutes(date.getUTCMinutes() + amount)
  return date
}
