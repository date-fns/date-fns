import isSameWeek from '../../../../isSameWeek/index'
import toDate from '../../../../toDate/index'
import type { Day } from '../../../../types'
import { FormatRelativeFn, FormatRelativeTokenFn } from '../../../types'

const accusativeWeekdays = [
  'нядзелю',
  'панядзелак',
  'аўторак',
  'сераду',
  'чацьвер',
  'пятніцу',
  'суботу',
]

function lastWeek(day: Day): string {
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

function thisWeek(day: Day): string {
  const weekday = accusativeWeekdays[day]

  return "'у " + weekday + " а' p"
}

function nextWeek(day: Day): string {
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

const lastWeekFormat: FormatRelativeTokenFn = (
  dirtyDate,
  baseDate,
  options
) => {
  const date = toDate(dirtyDate)
  const day = date.getDay() as Day
  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day)
  } else {
    return lastWeek(day)
  }
}

const nextWeekFormat: FormatRelativeTokenFn = (
  dirtyDate,
  baseDate,
  options
) => {
  const date = toDate(dirtyDate)
  const day = date.getDay() as Day
  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day)
  } else {
    return nextWeek(day)
  }
}

const formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'учора а' p",
  today: "'сёньня а' p",
  tomorrow: "'заўтра а' p",
  nextWeek: nextWeekFormat,
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, date, baseDate, options) => {
  const format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}

export default formatRelative
