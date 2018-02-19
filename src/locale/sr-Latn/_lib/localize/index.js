import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
  short: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'],
  long: ['nedjelja', 'ponedjeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota']
}

var monthValues = {
  short: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
  long: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar']
}

var timeOfDayValues = {
  long: ['ujutro', 'popodne']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + '.'
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
