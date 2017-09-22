var formatRelativeLocale = {
  lastWeek: '[förra] dddd[en] LT',
  yesterday: '[igår] LT',
  today: '[idag] LT',
  tomorrow: '[imorgon] LT',
  nextWeek: 'dddd LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
