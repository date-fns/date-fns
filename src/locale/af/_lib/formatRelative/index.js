var formatRelativeLocale = {
  lastWeek: '[verlede] dddd [om] LT',
  yesterday: '[gister om] LT',
  today: '[vandag om] LT',
  tomorrow: '[môre om] LT',
  nextWeek: 'dddd [om] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
