import DateWithTimeZone from '../_lib/DateWithTimeZone'

export default function localToUTC(date) {
  return new DateWithTimeZone(
    'utc',
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    )
  )
}
