import toDate from '../../toDate/index.js'
import requiredArgs from '../requiredArgs/index.js'

const MILLISECONDS_IN_DAY = 86400000

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function getUTCDayOfYear(dirtyDate: Date | number): number {
  const date = toDate(dirtyDate)
  const timestamp = date.getTime()
  date.setUTCMonth(0, 1)
  date.setUTCHours(0, 0, 0, 0)
  const startOfYearTimestamp = date.getTime()
  const difference = timestamp - startOfYearTimestamp
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}
