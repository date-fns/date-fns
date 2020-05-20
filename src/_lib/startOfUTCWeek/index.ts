import toDate from '../../toDate/index.js'
import { WeekFnOptions } from '../../types.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeek(
  dirtyDate: Date | number,
  options: WeekFnOptions
) {
  const weekStartsOn =
    options.weekStartsOn ?? options.locale?.options?.weekStartsOn ?? 0
  const date = toDate(dirtyDate)
  const day = date.getUTCDay()
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setUTCDate(date.getUTCDate() - diff)
  date.setUTCHours(0, 0, 0, 0)
  return date
}
