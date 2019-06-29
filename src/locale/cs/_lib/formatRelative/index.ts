var accusativeWeekdays = [
  'neděli',
  'pondělí',
  'úterý',
  'středu',
  'čtvrtek',
  'pátek',
  'sobotu'
]

var formatRelativeLocale: any = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: function (date: any, _baseDate: any, _options: any) {
    var day = date.getUTCDay()
    return "'v " + accusativeWeekdays[day] + " o' p"
  },
  other: 'P'
}

export default function formatRelative(token: any, date: any, baseDate: any, options: any) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
