var formatRelativeLocale = {
  lastWeek: '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT',
  yesterday: '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT',
  today: '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT',
  tomorrow: '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT',
  nextWeek: 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
