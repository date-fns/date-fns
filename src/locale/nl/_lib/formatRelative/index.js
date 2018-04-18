var formatRelativeLocale = {
  lastWeek: '[vorige] dddd [om] LT',
  yesterday: '[gisteren om] LT',
  today: '[vandaag om] LT',
  tomorrow: '[morgen om] LT',
  nextWeek: 'dddd [om] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
