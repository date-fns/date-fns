import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

const accusativeWeekdays = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу']

function lastWeek (day) {
  const weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + weekday + " о' p"
    case 1:
    case 2:
    case 4:
      return "'у минулий " + weekday + " о' p"
  }
}

function thisWeek (day) {
  const weekday = accusativeWeekdays[day]

  return "'у " + weekday + " о' p"
}

function nextWeek (day) {
  const weekday = accusativeWeekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + weekday + " о' p"
    case 1:
    case 2:
    case 4:
      return "'у наступний " + weekday + " о' p"
  }
}

const formatRelativeLocale = {
  lastWeek: function (date, baseDate, options) {
    const day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: function (date, baseDate, options) {
    const day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
