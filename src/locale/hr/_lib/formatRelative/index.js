var formatRelativeLocale = {
  lastWeek: '[posljednji] dddd [u] LT',
  yesterday: '[jučer u] LT',
  today: '[danas u] LT',
  tomorrow: '[sutra u] LT',
  nextWeek: 'dddd [u] LT',
  other: 'L'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
