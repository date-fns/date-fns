var formatRelativeLocale = {
  lastWeek: '[förra] dddd[en kl.] LT',
  yesterday: '[igår kl.] LT',
  today: '[idag kl.] LT',
  tomorrow: '[imorgon kl.] LT',
  nextWeek: 'dddd [kl.] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
