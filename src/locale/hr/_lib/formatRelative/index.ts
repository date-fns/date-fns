var formatRelativeLocale: any = {
  lastWeek: '[posljednji] dddd [u] LT',
  yesterday: '[jučer u] LT',
  today: '[danas u] LT',
  tomorrow: '[sutra u] LT',
  nextWeek: 'dddd [u] LT',
  other: 'L'
}

export default function formatRelative(
  token: any,
  _date: any,
  _baseDate: any,
  _options: any
) {
  return formatRelativeLocale[token]
}
