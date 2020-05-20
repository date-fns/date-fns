import toDate from '../../toDate/index.js'
import getUTCISOWeek from '../getUTCISOWeek/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeek(
  dirtyDate: Date | number,
  isoWeek: number
) {
  const date = toDate(dirtyDate)
  const diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
