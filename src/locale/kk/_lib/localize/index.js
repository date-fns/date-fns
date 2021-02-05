import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['б.з.д.', 'б.з.'],
  abbreviated: ['б.з.д.', 'б.з.'],
  wide: ['біздің заманымызға дейін', 'біздің заманымыз']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ші тоқ.', '2-ші тоқ.', '3-ші тоқ.', '4-ші тоқ.'],
  wide: ['1-ші тоқсан', '2-ші тоқсан', '3-ші тоқсан', '4-ші тоқсан']
}

var monthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: [
    'қаң',
    'ақп',
    'нау',
    'сәу',
    'мам',
    'мау',
    'шіл',
    'там',
    'қыр',
    'қаз',
    'қар',
    'жел'
  ],
  wide: [
    'қаңтар',
    'ақпан',
    'наурыз',
    'сәуір',
    'мамыр',
    'маусым',
    'шілде',
    'тамыз',
    'қыркүйек',
    'қазан',
    'қараша',
    'желтоқсан'
  ]
}
var formattingMonthValues = {
  narrow: ['Қ', 'А', 'Н', 'С', 'М', 'М', 'Ш', 'Т', 'Қ', 'Қ', 'Қ', 'Ж'],
  abbreviated: [
    'қаң',
    'ақп',
    'нау',
    'сәу',
    'мам',
    'мау',
    'шіл',
    'там',
    'қыр',
    'қаз',
    'қар',
    'жел'
  ],
  wide: [
    'қаңтар',
    'ақпан',
    'наурыз',
    'сәуір',
    'мамыр',
    'маусым',
    'шілде',
    'тамыз',
    'қыркүйек',
    'қазан',
    'қараша',
    'желтоқсан'
  ]
}

var dayValues = {
  narrow: ['Ж', 'Д', 'С', 'С', 'Б', 'Ж', 'С'],
  short: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  abbreviated: ['жс', 'дс', 'сс', 'ср', 'бс', 'жм', 'сб'],
  wide: [
    'жексенбі',
    'дүйсенбі',
    'сейсенбі',
    'сәрсенбі',
    'бейсенбі',
    'жұма',
    'сенбі'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасы',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күндіз',
    evening: 'кеш',
    night: 'түн'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түс',
    morning: 'таң',
    afternoon: 'күн',
    evening: 'кеш',
    night: 'түн'
  },
  wide: {
    am: 'ТД',
    pm: 'ТК',
    midnight: 'түн ортасында',
    noon: 'түсте',
    morning: 'таңертең',
    afternoon: 'күндіз',
    evening: 'кеште',
    night: 'түнде'
  }
}
var suffixes = {
  0: '-ші',
  1: '-ші',
  2: '-ші',
  3: '-ші',
  4: '-ші',
  5: '-ші',
  6: '-шы',
  7: '-ші',
  8: '-ші',
  9: '-шы',
  10: '-шы',
  20: '-шы',
  30: '-шы',
  40: '-шы',
  50: '-ші',
  60: '-шы',
  70: '-ші',
  80: '-ші',
  90: '-шы',
  100: '-ші'
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  var a = number % 10
  var b = number >= 100 ? 100 : null
  return number + (suffixes[number] || suffixes[a] || suffixes[b])
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
