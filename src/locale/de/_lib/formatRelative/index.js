var formatRelativeLocale = {
  lastWeek: '[letzten] dddd [um] LT',
  yesterday: '[gestern um] LT',
  today: '[heute um] LT',
  tomorrow: '[morgen um] LT',
  nextWeek: 'dddd [um] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
