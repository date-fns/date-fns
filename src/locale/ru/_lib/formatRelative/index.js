import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

var accusativeWeekdays = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среду',
  'четверг',
  'пятницу',
  'субботу'
]

function lastWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в прошлое " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + weekday + " в' p"
  }
}

function thisWeek(day) {
  var weekday = accusativeWeekdays[day]

  if (day === 2 /* Tue */) {
    return "'во " + weekday + " в' p"
  } else {
    return "'в " + weekday + " в' p"
  }
}

function nextWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
      return "'в следующее " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
      return "'в следующий " + weekday + " в' p"
    case 3:
    case 5:
    case 6:
      return "'в следующую " + weekday + " в' p"
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
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
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
