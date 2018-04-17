var formatRelativeLocale = {
  lastWeek: 'dddd [lalu pukul] LT',
  yesterday: '[Kemarin pukul] LT',
  today: '[Hari ini pukul] LT',
  tomorrow: '[Besok pukul] LT',
  nextWeek: 'dddd [pukul] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
