var formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    var weekday = date.getUTCDay()
    var last = weekday === 0 || weekday === 6 ? 'último' : 'última'
    return "'" + last + "' eeee 'às' p"
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
