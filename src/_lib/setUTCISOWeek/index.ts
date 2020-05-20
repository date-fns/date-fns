import toInteger from '../toInteger/index.js'
import toDate from '../../toDate/index.js'
import getUTCISOWeek from '../getUTCISOWeek/index.js'
import requiredArgs from '../requiredArgs/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISOWeek(
  dirtyDate: Date | number,
  dirtyISOWeek: number
) {
  const date = toDate(dirtyDate)
  const isoWeek = toInteger(dirtyISOWeek)
  const diff = getUTCISOWeek(date) - isoWeek
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
