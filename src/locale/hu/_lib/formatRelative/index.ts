import type { FormatRelativeFn } from '../../../types'

const accusativeWeekdays = [
  'vasárnap',
  'hétfőn',
  'kedden',
  'szerdán',
  'csütörtökön',
  'pénteken',
  'szombaton',
]

function week(isFuture: Boolean) {
  return (date: Date) => {
    const weekday = accusativeWeekdays[date.getUTCDay()]
    const prefix = isFuture ? '' : "'múlt' "
    return `${prefix}'${weekday}' p'-kor'`
  }
}
const formatRelativeLocale = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, date) => {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date)
  }

  return format
}

export default formatRelative
