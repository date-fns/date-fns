const accusativeWeekdays = [
  'neděli',
  'pondělí',
  'úterý',
  'středu',
  'čtvrtek',
  'pátek',
  'sobotu'
]

const formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: function(date, _baseDate, _options) {
    const day = date.getUTCDay()
    return "'v " + accusativeWeekdays[day] + " o' p"
  },
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
