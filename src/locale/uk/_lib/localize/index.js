import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  short: ['нед', 'пон', 'вів', 'сер', 'чтв', 'птн', 'суб'],
  long: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота']
}

var monthValues = {
  // ДСТУ 3582:2013
  short: ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'],
  long: ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень']
}

var timeOfDayValues = {
  long: ['ночі', 'ранку', 'дня', 'вечора']
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  var suffix

  if (unit === 'dayOfMonth') {
    if (dirtyNumber === 3 || dirtyNumber === 23) {
      suffix = '-є'
    } else {
      suffix = '-е'
    }
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
