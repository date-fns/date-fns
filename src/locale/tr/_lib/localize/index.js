import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

// Note: in Turkish, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
  short: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
  long: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
}

var monthValues = {
  short: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  long: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
}

var timeOfDayValues = {
  uppercase: ['ÖÖ', 'ÖS'],
  lowercase: ['öö', 'ös'],
  long: ['ö.ö.', 'ö.s.']
}

var ordinalNumberSuffixes = {
  1: "'inci",
  2: "'inci",
  3: "'üncü",
  4: "'üncü",
  5: "'inci",
  6: "'ıncı",
  7: "'inci",
  8: "'inci",
  9: "'uncu",
  10: "'uncu",
  20: "'inci",
  30: "'uncu",
  50: "'inci",
  60: "'ıncı",
  70: "'inci",
  80: "'inci",
  90: "'ıncı",
  100: "'üncü"
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)

  if (number === 0) {
    return "0'ıncı"
  }

  var x = number % 10
  var y = number % 100 - x
  var z = number >= 100 ? 100 : null

  return number + (ordinalNumberSuffixes[x] || ordinalNumberSuffixes[y] || ordinalNumberSuffixes[z] || '')
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
