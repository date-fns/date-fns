import toDate from '../../toDate/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function addUTCMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var amount = Number(dirtyAmount)
  date.setUTCMinutes(date.getUTCMinutes() + amount)
  return date
}
