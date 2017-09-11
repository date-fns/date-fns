var formatRelativeLocale = {
  lastWeek: '[sidste] dddd [kl.] LT',
  yesterday: '[i går kl.] LT',
  today: '[i dag kl.] LT',
  tomorrow: '[i morgen kl.] LT',
  nextWeek: '[på] dddd [kl.] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
