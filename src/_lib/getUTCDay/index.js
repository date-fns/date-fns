import toDate from '../../toDate/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCDay(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)
  var dayOfWeek = date.getUTCDay()
  return dayOfWeek
}
