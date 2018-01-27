import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
  short: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
  long: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag']
}

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  long: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember']
}

var timeOfDayValues = {
  uppercase: ['VM', 'NM'],
  lowercase: ['vm', 'nm'],
  long: ['vm', 'nm']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  var rem100 = number % 100
  if (rem100 < 20) {
    switch (rem100) {
      case 1:
      case 8:
        return number + 'ste'
      default:
        return number + 'de'
    }
  }
  return number + 'ste'
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
