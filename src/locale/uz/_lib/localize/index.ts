import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['M.A', 'M.'],
  abbreviated: ['M.A', 'M.'],
  wide: ['Miloddan Avvalgi', 'Milodiy']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['CH.1', 'CH.2', 'CH.3', 'CH.4'],
  wide: ['1-chi chorak', '2-chi chorak', '3-chi chorak', '4-chi chorak']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Iyun',
    'Iyul',
    'Avg',
    'Sen',
    'Okt',
    'Noy',
    'Dek'
  ],
  wide: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr'
  ]
}

var dayValues = {
  narrow: ['Y', 'D', 'S', 'CH', 'P', 'J', 'SH'],
  short: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'],
  abbreviated: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
  wide: [
    'Yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun'
  }
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
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

  return number
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
