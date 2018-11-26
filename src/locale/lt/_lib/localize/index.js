import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['pr. Kr.', 'po Kr.'],
  abbreviated: ['pr. Kr.', 'po Kr.'],
  wide: ['prieš Kristų', 'po Kristaus']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I ketv.', 'II ketv.', 'III ketv.', 'IV ketv.'],
  wide: ['I ketvirtis', 'II ketvirtis', 'III ketvirtis', 'IV ketvirtis']
}

var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['I k.', 'II k.', 'III k.', 'IV k.'],
  wide: ['I ketvirtis', 'II ketvirtis', 'III ketvirtis', 'IV ketvirtis']
}

var monthValues = {
  narrow: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  abbreviated: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  wide: ['sausis', 'vasaris', 'kovas', 'balandis', 'gegužė', 'birželis', 'liepa', 'rugpjūtis', 'rugsėjis', 'spalis', 'lapkritis', 'gruodis']
}

var formattingMonthValues = {
  narrow: ['S', 'V', 'K', 'B', 'G', 'B', 'L', 'R', 'R', 'S', 'L', 'G'],
  abbreviated: ['saus.', 'vas.', 'kov.', 'bal.', 'geg.', 'birž.', 'liep.', 'rugp.', 'rugs.', 'spal.', 'lapkr.', 'gruod.'],
  wide: ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio']
}

var dayValues = {
  narrow: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  short: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
  abbreviated: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  wide: ['sekmadienis', 'pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis']
}

var formattingDayValues = {
  narrow: ['S', 'P', 'A', 'T', 'K', 'P', 'Š'],
  short: ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št'],
  abbreviated: ['sk', 'pr', 'an', 'tr', 'kt', 'pn', 'št'],
  wide: ['sekmadienį', 'pirmadienį', 'antradienį', 'trečiadienį', 'ketvirtadienį', 'penktadienį', 'šeštadienį']
}

var dayPeriodValues = {
  narrow: {
    am: 'pr. p.',
    pm: 'pop.',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  },
  abbreviated: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  },
  wide: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'vidurdienis',
    morning: 'rytas',
    afternoon: 'diena',
    evening: 'vakaras',
    night: 'naktis'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'pr. p.',
    pm: 'pop.',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  },
  abbreviated: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  },
  wide: {
    am: 'priešpiet',
    pm: 'popiet',
    midnight: 'vidurnaktis',
    noon: 'perpiet',
    morning: 'rytas',
    afternoon: 'popietė',
    evening: 'vakaras',
    night: 'naktis'
  }
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)
  return number + '-oji'
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
