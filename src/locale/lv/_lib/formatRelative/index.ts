import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index'
var weekdays = [
  'svētdienā',
  'pirmdienā',
  'otrdienā',
  'trešdienā',
  'ceturtdienā',
  'piektdienā',
  'sestdienā'
]

var formatRelativeLocale: any = {
  lastWeek: function(date: any, baseDate: any, options: any) {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p"
    }

    var weekday = weekdays[date.getUTCDay()]
    return "'Pagājušā " + weekday + " plkst.' p"
  },
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: function(date: any, baseDate: any, options: any) {
    if (isSameUTCWeek(date, baseDate, options)) {
      return "eeee 'plkst.' p"
    }

    var weekday = weekdays[date.getUTCDay()]
    return "'Nākamajā " + weekday + " plkst.' p"
  },
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
