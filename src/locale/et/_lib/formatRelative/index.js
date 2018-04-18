var formatRelativeLocale = {
  lastWeek: '[eelmine] dddd [kell] LT',
  yesterday: '[eile kell] LT',
  today: '[täna kell] LT',
  tomorrow: '[homme kell] LT',
  nextWeek: 'dddd [kell] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
