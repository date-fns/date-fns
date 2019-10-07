import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
// Source: https://www.unicode.org/cldr/charts/32/summary/te.html
// Source: https://dsal.uchicago.edu/dictionaries/brown/

// CLDR #1605 - #1608
var eraValues = {
  narrow: ['క్రీ.పూ.', 'క్రీ.శ.'],
  abbreviated: ['క్రీ.పూ.', 'క్రీ.శ.'],
  wide: ['క్రీస్తు పూర్వం', 'క్రీస్తుశకం']
}

// CLDR #1613 - #1628
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['త్రై1', 'త్రై2', 'త్రై3', 'త్రై4'],
  wide: ['1వ త్రైమాసికం', '2వ త్రైమాసికం', '3వ త్రైమాసికం', '4వ త్రైమాసికం']
}

// CLDR #1637 - #1708
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['జ', 'ఫి', 'మా', 'ఏ', 'మే', 'జూ', 'జు', 'ఆ', 'సె', 'అ', 'న', 'డి'],
  abbreviated: [
    'జన',
    'ఫిబ్ర',
    'మార్చి',
    'ఏప్రి',
    'మే',
    'జూన్',
    'జులై',
    'ఆగ',
    'సెప్టెం',
    'అక్టో',
    'నవం',
    'డిసెం'
  ],
  wide: [
    'జనవరి',
    'ఫిబ్రవరి',
    'మార్చి',
    'ఏప్రిల్',
    'మే',
    'జూన్',
    'జులై',
    'ఆగస్టు',
    'సెప్టెంబర్',
    'అక్టోబర్',
    'నవంబర్',
    'డిసెంబర్'
  ]
}

// CLDR #1709 - #1764
var dayValues = {
  narrow: ['ఆ', 'సో', 'మ', 'బు', 'గు', 'శు', 'శ'],
  short: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  abbreviated: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  wide: [
    'ఆదివారం',
    'సోమవారం',
    'మంగళవారం',
    'బుధవారం',
    'గురువారం',
    'శుక్రవారం',
    'శనివారం'
  ]
}

// CLDR #1767 - #1806
var dayPeriodValues = {
  narrow: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
  },
  abbreviated: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
  },
  wide: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
  },
  abbreviated: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
  },
  wide: {
    am: 'పూర్వాహ్నం',
    pm: 'అపరాహ్నం',
    midnight: 'అర్ధరాత్రి',
    noon: 'మిట్టమధ్యాహ్నం',
    morning: 'ఉదయం',
    afternoon: 'మధ్యాహ్నం',
    evening: 'సాయంత్రం',
    night: 'రాత్రి'
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

  return number + 'వ'
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
