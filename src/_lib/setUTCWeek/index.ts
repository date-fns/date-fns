import toDate from '../../toDate/index'
import getUTCWeek from '../getUTCWeek/index'
import { WeekFnOptions } from '../../types.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCWeek(
  dirtyDate: Date | number,
  week: number,
  options: WeekFnOptions = {}
) {
  const date = toDate(dirtyDate)
  const diff = getUTCWeek(date, options) - week
  date.setUTCDate(date.getUTCDate() - diff * 7)
  return date
}
