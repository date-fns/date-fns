var formatRelativeLocale: any = {
  lastWeek: function(date: any, _baseDate: any, _options: any) {
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

export default function formatRelative(
  token: any,
  date: any,
  baseDate: any,
  options: any
) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
