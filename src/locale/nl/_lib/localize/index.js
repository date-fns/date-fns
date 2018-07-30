import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['v.C.', 'n.C.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['voor Christus', 'na Christus']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1e kwartaal', '2e kwartaal', '3e kwartaal', '4e kwartaal']
}

var monthValues = {
  narrow: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
}

var dayValues = {
  narrow: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  short: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  abbreviated: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  wide: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
}

var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  }
}

function ordinalNumber (dirtyNumber) {
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
