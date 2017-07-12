import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'],
  short: ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'piąt.', 'sob.'],
  long: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
}

var monthValues = {
  short: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  long: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
}

var timeOfDayValues = {
  long: ['w nocy', 'rano', 'po południu', 'wieczorem']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  return String(number)
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
