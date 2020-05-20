import toDate from '../../toDate/index.js'
import { WeekFnOptions } from '../../types.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCDay(
  dirtyDate: Date | number,
  day: number,
  options: WeekFnOptions = {}
) {
  const weekStartsOn =
    options.weekStartsOn ?? options.locale?.options?.weekStartsOn ?? 0
  const date = toDate(dirtyDate)
  const currentDay = date.getUTCDay()
  const remainder = day % 7
  const dayIndex = (remainder + 7) % 7
  const diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
