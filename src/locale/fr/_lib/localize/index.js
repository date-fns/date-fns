import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['av. J.-C.', 'ap. J.-C.'],
  abbreviated: ['av. J.-C.', 'ap. J.-C.'],
  wide: ['Avant Jésus-Christ', 'Après Jésus-Christ']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
}

var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
}

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'du matin',
    afternoon: 'de l\'après midi',
    evening: 'du soir',
    night: 'la nuit'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'du matin',
    afternoon: 'de l\'après midi',
    evening: 'du soir',
    night: 'la nuit'
  },
  wide: {
    am: 'du matin',
    pm: 'de l\'après midi',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'du matin',
    afternoon: 'de l\'après midi',
    evening: 'du soir',
    night: 'la nuit'
  }
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var options = dirtyOptions || {};
  var unit = String(options.unit);

  if (number === 1) {
    if (['week', 'hour', 'minute', 'second'].indexOf(unit) !== -1) {
      return '1ère'
    }
    else {
      return '1er'
    }
  }
  return number + 'ème'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
}

export default localize
