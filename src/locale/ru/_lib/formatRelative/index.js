import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

var accusativeWeekdays = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу']

function lastWeek (day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return '[в прошлое ' + weekday + ' в] LT'
    case 1:
    case 2:
    case 4:
      return '[в прошлый ' + weekday + ' в] LT'
    case 3:
    case 5:
    case 6:
      return '[в прошлую ' + weekday + ' в] LT'
  }
}

function thisWeek (day) {
  var weekday = accusativeWeekdays[day]

  if (day === 2 /* Tue */) {
    return '[во ' + weekday + ' в] LT'
  } else {
    return '[в ' + weekday + ' в] LT'
  }
}

function nextWeek (day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return '[в следующее ' + weekday + ' в] LT'
    case 1:
    case 2:
    case 4:
      return '[в следующий ' + weekday + ' в] LT'
    case 3:
    case 5:
    case 6:
      return '[в следующую ' + weekday + ' в] LT'
  }
}

var formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: '[вчера в] LT',
  today: '[сегодня в] LT',
  tomorrow: '[завтра в] LT',
  nextWeek: function (date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
  other: 'L'
}

export default function formatRelative (token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
