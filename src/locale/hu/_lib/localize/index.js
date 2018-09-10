import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['v', 'h', 'k', 'sze', 'cs', 'p', 'szo'],
  short: ['vas', 'hét', 'kedd', 'sze', 'csüt', 'pén', 'szo'],
  long: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
}

var monthValues = {
  short: ['jan', 'feb', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'],
  long: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december']
}

var timeOfDayValues = {
  uppercase: ['DE', 'DU'],
  lowercase: ['de', 'du'],
  long: ['délelőtt', 'délután']
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
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
