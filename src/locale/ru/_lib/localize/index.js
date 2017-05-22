import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  short: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],
  long: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
}

var monthValues = {
  // http://new.gramota.ru/spravka/buro/search-answer?s=242637
  short: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  long: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
}

var timeOfDayValues = {
  long: ['ночи', 'утра', 'дня', 'вечера']
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  var suffix

  if (unit === 'dayOfMonth') {
    suffix = '-е'
  } else if (unit === 'isoWeek' || unit === 'week') {
    suffix = '-я'
  } else {
    suffix = '-й'
  }

  return dirtyNumber + suffix
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
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
