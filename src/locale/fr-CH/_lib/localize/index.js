import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  short: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  long: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
}

var monthValues = {
  short: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  long: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
}

var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['du matin', 'de l’après-midi', 'du soir']
}

function timeOfDay (dirtyHours, dirtyOptions) {
  var hours = Number(dirtyHours)
  var options = dirtyOptions || {}
  var type = options.type ? String(options.type) : 'long'

  if (type === 'uppercase') {
    return (hours / 12) >= 1 ? timeOfDayValues.uppercase[1] : timeOfDayValues.uppercase[0]
  } else if (type === 'lowercase') {
    return (hours / 12) >= 1 ? timeOfDayValues.lowercase[1] : timeOfDayValues.lowercase[0]
  }

  if (hours <= 12) {
    return timeOfDayValues.long[0]
  } else if (hours <= 16) {
    return timeOfDayValues.long[1]
  } else {
    return timeOfDayValues.long[2]
  }
}

function masculineOrdinalNumber (number) {
  if (number === 1) {
    return '1er'
  }

  return number + 'e'
}

function feminineOrdinalNumber (number) {
  if (number === 1) {
    return '1re'
  }

  return number + 'e'
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)
  var options = dirtyOptions || {}
  var unit = options.unit ? String(options.unit) : null

  if (unit === 'isoWeek' || unit === 'week') {
    return feminineOrdinalNumber(number)
  }

  return masculineOrdinalNumber(number)
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: timeOfDay,
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
