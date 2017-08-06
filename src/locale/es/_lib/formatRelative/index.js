var formatRelativeLocale = {
  lastWeek: '[el] dddd [pasado a la] LT',
  yesterday: '[ayer a la] LT',
  today: '[hoy a la] LT',
  tomorrow: '[mañana a la] LT',
  nextWeek: 'dddd [a la] LT',
  other: 'L'
}

var formatRelativeLocalePlural = {
  lastWeek: '[el] dddd [pasado a las] LT',
  yesterday: '[ayer a las] LT',
  today: '[hoy a las] LT',
  tomorrow: '[mañana a las] LT',
  nextWeek: 'dddd [a las] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  if (date.getHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
