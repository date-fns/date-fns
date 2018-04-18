var formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    var weekday = date.getUTCDay()
    var last = weekday === 0 || weekday === 6 ? 'último' : 'última'
    return '[' + last + '] dddd [às] LT'
  },
  yesterday: '[ontem às] LT',
  today: '[hoje às] LT',
  tomorrow: '[amanhã às] LT',
  nextWeek: 'dddd [às] LT',
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
