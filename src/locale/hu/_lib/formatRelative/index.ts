var accusativeWeekdays = [
  'vasárnap',
  'hétfőn',
  'kedden',
  'szerdán',
  'csütörtökön',
  'pénteken',
  'szombaton'
]

function week(isFuture: any) {
  return function(date: any, _baseDate: any, _options: any) {
    var day = date.getUTCDay()
    return (
      (isFuture ? '' : "'múlt' ") +
      "'" +
      accusativeWeekdays[day] +
      "'" +
      " p'-kor'"
    )
  }
}
var formatRelativeLocale: any = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
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
