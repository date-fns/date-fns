import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['ab. J.C.', 'apr. J.C.'],
  abbreviated: ['ab. J.C.', 'apr. J.C.'],
  wide: ['abans Jèsus-Crist', 'après Jèsus-Crist']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1èr trimèstre', '2nd trimèstre', '3en trimèstre', '4en trimèstre']
}

var monthValues = {
  narrow: [
    'GN',
    'FB',
    'MÇ',
    'AB',
    'MA',
    'JN',
    'JL',
    'AG',
    'ST',
    'OC',
    'NV',
    'DC'
  ],

  abbreviated: [
    'gen.',
    'febr.',
    'març',
    'abr.',
    'mai',
    'junh',
    'jul.',
    'ag.',
    'set.',
    'oct.',
    'nov.',
    'dec.'
  ],
  wide: [
    'genièr',
    'febrièr',
    'març',
    'abril',
    'mai',
    'junh',
    'julhet',
    'agost',
    'setembre',
    'octòbre',
    'novembre',
    'decembre'
  ]
}

var dayValues = {
  narrow: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dm.', 'dc.', 'dj.', 'dv.', 'ds.'],
  wide: [
    'dimenge',
    'diluns',
    'dimars',
    'dimècres',
    'dijòus',
    'divendres',
    'dissabte'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'matin',
    afternoon: 'aprèp-miègjorn',
    evening: 'vèspre',
    night: 'nuèch'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mièjanuèch',
    noon: 'miègjorn',
    morning: 'del matin',
    afternoon: 'de l’aprèp-miègjorn',
    evening: 'del ser',
    night: 'de la nuèch'
  }
}

/**
 * @param {Number} dirtyNumber
 * @param {Object} [_dirtyOptions]
 */
function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber)
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  var rem100 = number % 100
  
  if (unit === 'year' || unit === 'week' || unit === 'hour' || unit === 'minute' || unit === 'second') {
      if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'èra'
      case 2:
        return number + 'nda'
    }
  }
    return number + 'ena'
  } else {
      if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'èr'
      case 2:
        return number + 'nd'
    }
  }
    return number + 'en'
  }
  
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
    argumentCallback: function(quarter) {
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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
