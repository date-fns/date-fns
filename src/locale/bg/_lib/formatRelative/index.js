import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

// Adapted from the `ru` translation

var weekdays = [
  'неделя',
  'понеделник',
  'вторник',
  'сряда',
  'четвъртък',
  'петък',
  'събота'
]

function lastWeek(day) {
  var weekday = weekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'миналата " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
    case 5:
      return "'миналия " + weekday + " в' p"
  }
}

function thisWeek(day) {
  var weekday = weekdays[day]

  if (day === 2 /* Tue */) {
    return "'във " + weekday + " в' p"
  } else {
    return "'в " + weekday + " в' p"
  }
}

function nextWeek(day) {
  var weekday = weekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следващата " + weekday + " в' p"
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следващия " + weekday + " в' p"
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
  today: "'днес в' p",
  tomorrow: "'утре в' p",
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
