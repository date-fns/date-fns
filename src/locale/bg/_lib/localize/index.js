import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

const weekdayValues = {
  narrow: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  short: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
  long: [
    'неделя',
    'понеделник',
    'вторник',
    'сряда',
    'четвъртък',
    'петък',
    'събота'
  ]
}

const monthValues = {
  short: [
    'яну',
    'фев',
    'мар',
    'апр',
    'май',
    'юни',
    'юли',
    'авг',
    'сеп',
    'окт',
    'ное',
    'дек'
  ],
  long: [
    'януари',
    'февруари',
    'март',
    'април',
    'май',
    'юни',
    'юли',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември'
  ]
}

const timeOfDayValues = {
  long: ['сутринта', 'на обяд', 'следобед', 'вечерта']
}

function ordinalNumber(dirtyNumber) {
  const number = Number(dirtyNumber)

  const rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
    }
  }
  return number + '-и'
}

const localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function(hours) {
    if (hours >= 17) {
      return 3
    } else if (hours >= 12) {
      return 2
    } else if (hours >= 4) {
      return 1
    } else {
      return 0
    }
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
