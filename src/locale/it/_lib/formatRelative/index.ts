import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index'

var weekdays = [
  'domenica',
  'lunedì',
  'martedì',
  'mercoledì',
  'giovedì',
  'venerdì',
  'sabato'
]

function lastWeek(day) {
  switch (day) {
    case 0:
      return "'domenica scorsa alle' p"
    default:
      return "'" + weekdays[day] + " scorso alle' p"
  }
}

function thisWeek(day) {
  return "'" + weekdays[day] + " alle' p"
}

function nextWeek(day) {
  switch (day) {
    case 0:
      return "'domenica prossima alle' p"
    default:
      return "'" + weekdays[day] + " prossimo alle' p"
  }
}

var formatRelativeLocale = {
  lastWeek: function(date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function(date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
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
