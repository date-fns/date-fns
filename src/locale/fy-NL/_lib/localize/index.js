import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['f.Kr.', 'n.Kr.'],
  abbreviated: ['f.Kr.', 'n.Kr.'],
  wide: ['foar Kristus', 'nei Kristus']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1e kwart', '2e kwart', '3e kwart', '4e kwart']
}

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'jan.', 
    'feb.', 
    'mrt.', 
    'apr.', 
    'maaie', 
    'jun.', 
    'jul.', 
    'aug.', 
    'sep.', 
    'okt.', 
    'nov.', 
    'des.'
  ],
  wide: [
    'jannewaris', 
    'febrewaris', 
    'maart', 
    'april', 
    'maaie', 
    'juny', 
    'july', 
    'augustus', 
    'septimber', 
    'oktober', 
    'novimber', 
    'desimber'
  ]
}

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Sn', 'Mo', 'Ti', 'Wo', 'To', 'Fr', 'Sn'],
  abbreviated: ['Sne', 'Moa', 'Tii', 'Woa', 'Ton', 'Fre', 'Sne'],
  wide: [
    'Snein', 
    'Moandei', 
    'Tiisdei', 
    'Woansdei', 
    'Tongersdei', 
    'Freed', 
    'Sneon'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "yn 'e nacht"
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "yn 'e nacht"
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'middei',
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "yn 'e nacht"
  },
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + 'e'
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
    defaultWidth: 'wide'
  })
}

export default localize