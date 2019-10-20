import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

const accusativeWeekdays = [
  'нядзелю',
  'панядзелак',
  'аўторак',
  'сераду',
  'чацвер',
  'пятніцу',
  'суботу'
]

function lastWeek(day) {
  const weekday = accusativeWeekdays[day]

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
  const weekday = accusativeWeekdays[day]

  return "'у " + weekday + " а' p"
}

function nextWeek(day) {
  const weekday = accusativeWeekdays[day]

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

const formatRelativeLocale = {
  lastWeek: function(date, baseDate, options) {
    const day = date.getUTCDay()
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
    const day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
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
