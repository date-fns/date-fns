import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['לפנה״ס', 'לספירה'],
  abbreviated: ['לפנה״ס', 'לספירה'],
  wide: ['לפני הספירה', 'לספירה']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['רבעון 1', 'רבעון 2', 'רבעון 3', 'רבעון 4']
}

var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
  wide: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']
}

var dayValues = {
  narrow: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  short: ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
  abbreviated: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
  wide: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת']
}

var dayPeriodValues = {
  narrow: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בוקר',
    afternoon: 'אחר הצהריים',
    evening: 'ערב',
    night: 'לילה'
  },
  abbreviated: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בוקר',
    afternoon: 'אחר הצהריים',
    evening: 'ערב',
    night: 'לילה'
  },
  wide: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בוקר',
    afternoon: 'אחר הצהריים',
    evening: 'ערב',
    night: 'לילה'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בבוקר',
    afternoon: 'בצהריים',
    evening: 'בערב',
    night: 'בלילה'
  },
  abbreviated: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בבוקר',
    afternoon: 'אחר הצהריים',
    evening: 'בערב',
    night: 'בלילה'
  },
  wide: {
    am: 'לפנה״צ',
    pm: 'אחה״צ',
    midnight: 'חצות',
    noon: 'צהריים',
    morning: 'בבוקר',
    afternoon: 'אחר הצהריים',
    evening: 'בערב',
    night: 'בלילה'
  }
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // We only show words till 10
  if (number <= 0 || number > 10) return number

  var options = dirtyOptions || {}
  var unit = String(options.unit)

  var isFemale = ['year', 'hour', 'minute', 'second'].indexOf(unit) >= 0

  var male = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שביעי', 'שמיני', 'תשיעי', 'עשירי']
  var female = ['ראשונה', 'שנייה', 'שלישית', 'רביעית', 'חמישית', 'שישית', 'שביעית', 'שמינית', 'תשיעית', 'עשירית']

  var index = number - 1
  return isFemale ? female[index] : male[index]
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
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
