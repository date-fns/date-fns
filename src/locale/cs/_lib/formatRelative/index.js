var accusativeWeekdays = [
  'neděli',
  'pondělí',
  'úterý',
  'středu',
  'čtvrtek',
  'pátek',
  'sobotu'
]

var formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: "'v' eeee 'o' p",
  nextWeek: function(date, baseDate, options) {
    var day = date.getUTCDay()
    return "'v " + accusativeWeekdays[day] + " o' p"
  },
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
