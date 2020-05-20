import toDate from '../../toDate/index.js'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function setUTCISODay(dirtyDate: Date | number, day: number) {
  if (day % 7 === 0) day = day - 7
  const weekStartsOn = 1
  const date = toDate(dirtyDate)
  const currentDay = date.getUTCDay()
  const remainder = day % 7
  const dayIndex = (remainder + 7) % 7
  const diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay

  date.setUTCDate(date.getUTCDate() + diff)
  return date
}
