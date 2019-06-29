import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index'

var accusativeWeekdays = [
  'нядзелю',
  'панядзелак',
  'аўторак',
  'сераду',
  'чацвер',
  'пятніцу',
  'суботу'
]

function lastWeek(day: any) {
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

function thisWeek(day: any) {
  var weekday = accusativeWeekdays[day]

  return "'у " + weekday + " а' p"
}

function nextWeek(day: any) {
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

var formatRelativeLocale: any = {
  lastWeek: function(date: any, baseDate: any, options: any) {
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
  nextWeek: function(date: any, baseDate: any, options: any) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
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
