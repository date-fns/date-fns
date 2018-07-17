import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['VC', 'NC'],
  abbreviated: ['V.Chr.', 'N.Chr.'],
  wide: ['voor Christus', 'na Christus']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1ste kwartaal', '2de kwartaal', '3de kwartaal', '4de kwartaal']
}

var monthValues = {
  abbreviated: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
}

var dayValues = {
  narrow: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  abbreviated: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  wide: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
}

var dayPeriodValues = {
  narrow: {
    midnight: 'middernacht',
    noon: 'mi.',
    morning: 'ochtend',
    afternoon: 'mi.',
    evening: 'avond',
    night: 'nacht'
  },

  abbreviated: {
    midnight: 'middernacht',
    noon: 'mid.',
    morning: 'ochtend',
    afternoon: 'mid.',
    evening: 'avond',
    night: 'nacht'
  },

  wide: {
    midnight: 'middernacht',
    noon: 'middag',
    morning: 'ochtend',
    afternoon: 'middag',
    evening: 'avond',
    night: 'nacht'
  }
}

var formattingDayPeriodValues = {
  narrow: {
    midnight: 'om middernacht',
    noon: 'in de middag',
    morning: 'in de ochtend',
    afternoon: 'in de middag',
    evening: 'in de avond',
    night: 's\'nachts'
  },

  abbreviated: {
    midnight: 'om middernacht',
    noon: 'in de middag',
    morning: 'in de ochtend',
    afternoon: 'in de middag',
    evening: 'in de avond',
    night: 's\'nachts'
  },

  wide: {
    midnight: 'om middernacht',
    noon: 'in de middag',
    morning: 'in de ochtend',
    afternoon: 'in de middag',
    evening: 'in de avond',
    night: 's\'nachts'
  }
}

// The dutch Ordinal Number system is a bit weird. It's weird as in; there is
// no real system or "one way of doing it". The Dutch Language Union advises
// to use the Ordinal Number in a consistent way. The only consistent way is to
// use the `e` as an affix.

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + 'e'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'abbreviated'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'abbreviated',
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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
