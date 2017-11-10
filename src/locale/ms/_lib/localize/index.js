import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

// Note: in Malay, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Ah', 'Is', 'Se', 'Ra', 'Kh', 'Ju', 'Sa'],
  short: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  long: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu']
}

var monthValues = {
  short: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
  long: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember']
}

var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)

  switch (number) {
    case 1:
      return 'pertama'
    case 2:
      return 'kedua'
    case 3:
      return 'ketiga'
    default:
      return 'ke-' + number
  }
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
