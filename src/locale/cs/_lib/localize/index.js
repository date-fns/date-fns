import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  // narrow: ['B', 'A'], not in cs
  abbreviated: ['př. n. l.', 'n. l.'],
  wide: ['před naším letopočtem', 'našeho letopočtu']
}

// not in cs
// var quarterValues = {
//   narrow: ['1', '2', '3', '4'],
//   abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
//   wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
// }

// v1
// var monthValues = {
//   short: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
//   long: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
// }

// v2
var monthValues = {
  narrow: ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'],
  abbreviated: [
    'led',
    'úno',
    'bře',
    'dub',
    'kvě',
    'čvn',
    'čvc',
    'srp',
    'zář',
    'říj',
    'lis',
    'pro'
  ],
  wide: [
    'leden',
    'únor',
    'březen',
    'duben',
    'květen',
    'červen',
    'červenec',
    'srpen',
    'září',
    'říjen',
    'listopad',
    'prosinec'
  ]
}
// v1
// var weekdayValues = {
//   narrow: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
//   short: ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'],
//   long: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
// }

// v2
var dayValues = {
  narrow: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  short: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  abbreviated: ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'],
  wide: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
}

// v1
// var timeOfDayValues = {
//   uppercase: ['DOP.', 'ODP.'],
//   lowercase: ['dop.', 'odp.'],
//   long: ['dopoledne', 'odpoledne']
// }

// v2
var dayPeriodValues = {
  narrow: {
    am: 'odp.',
    pm: 'dop.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  abbreviated: {
    am: 'odp.',
    pm: 'dop.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'odpoledne',
    pm: 'dopoledne',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  }
}

var formattingDayPeriodValues = {
  narrow: {
    am: 'odp.',
    pm: 'dop.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  abbreviated: {
    am: 'odp.',
    pm: 'dop.',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  },
  wide: {
    am: 'odpoledne',
    pm: 'dopoledne',
    midnight: 'půlnoc',
    noon: 'poledne',
    morning: 'ráno',
    afternoon: 'odpoledne',
    evening: 'večer',
    night: 'noc'
  }
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  // not in cs
  // quarter: buildLocalizeFn({
  //   values: quarterValues,
  //   defaultWidth: 'wide',
  //   argumentCallback: function (quarter) {
  //     return Number(quarter) - 1
  //   }
  // }),

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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
