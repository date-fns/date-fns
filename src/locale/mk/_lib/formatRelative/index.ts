import isSameWeek from '../../../../isSameWeek/index'
import type { Day } from '../../../../types'
import type { FormatRelativeFn, FormatRelativeFnOptions } from '../../../types'

const weekdays = [
  'недела',
  'понеделник',
  'вторник',
  'среда',
  'четврток',
  'петок',
  'сабота',
]

function lastWeek(day: Day): string {
  const weekday = weekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'минатата " + weekday + " во' p"
    case 1:
    case 2:
    case 4:
    case 5:
      return "'минатиот " + weekday + " во' p"
  }
}

function thisWeek(day: Day): string {
  const weekday = weekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'ова " + weekday + " вo' p"
    case 1:
    case 2:
    case 4:
    case 5:
      return "'овој " + weekday + " вo' p"
  }
}

function nextWeek(day: Day): string {
  const weekday = weekdays[day]

  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'следната " + weekday + " вo' p"
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следниот " + weekday + " вo' p"
  }
}

const formatRelativeLocale = {
  lastWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions
  ): string => {
    const day = date.getDay() as Day
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: "'вчера во' p",
  today: "'денес во' p",
  tomorrow: "'утре во' p",
  nextWeek: <DateType extends Date>(
    date: DateType,
    baseDate: DateType,
    options?: FormatRelativeFnOptions
  ): string => {
    const day = date.getDay() as Day
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
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
