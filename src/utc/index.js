import DateWithTimeZone from '../_lib/DateWithTimeZone'

export default function utc(date) {
  return new DateWithTimeZone('utc', date.getTime())
}
