import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

var accusativeWeekdays = [
  'нядзелю',
  'панядзелак',
  'аўторак',
  'сераду',
  'чацвер',
  'пятніцу',
  'суботу'
]

function lastWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у мінулую " + weekday + " а' p"
    case 1:
    case 2:
    case 4:
      return "'у мінулы " + weekday + " а' p"
  }
}

function thisWeek(day) {
  var weekday = accusativeWeekdays[day]

  return "'у " + weekday + " а' p"
}

function nextWeek(day) {
  var weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступную " + weekday + " а' p"
    case 1:
    case 2:
    case 4:
      return "'у наступны " + weekday + " а' p"
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
  yesterday: "'учора а' p",
  today: "'сёння а' p",
  tomorrow: "'заўтра а' p",
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
