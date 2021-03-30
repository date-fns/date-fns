import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['НТӨ', 'НТ'],
  abbreviated: ['НТӨ', 'НТ'],
  wide: ['нийтийн тооллын өмнөх', 'нийтийн тооллын']
}

var quarterValues = {
  narrow: ['I', 'II', 'III', 'IV'],
  abbreviated: ['I улирал', 'II улирал', 'III улирал', 'IV улирал'],
  wide: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
  ],
  abbreviated: [
    '1-р сар',
    '2-р сар',
    '3-р сар',
    '4-р сар',
    '5-р сар',
    '6-р сар',
    '7-р сар',
    '8-р сар',
    '9-р сар',
    '10-р сар',
    '11-р сар',
    '12-р сар'
  ],
  wide: [
    'Нэгдүгээр сар',
    'Хоёрдугаар сар',
    'Гуравдугаар сар',
    'Дөрөвдүгээр сар',
    'Тавдугаар сар',
    'Зургаадугаар сар',
    'Долоодугаар сар',
    'Наймдугаар сар',
    'Есдүгээр сар',
    'Аравдугаар сар',
    'Арваннэгдүгээр сар',
    'Арван хоёрдугаар сар'
  ]
}

var formattingMonthValues = {
  ...monthValues,
  wide: [
    'нэгдүгээр сар',
    'хоёрдугаар сар',
    'гуравдугаар сар',
    'дөрөвдүгээр сар',
    'тавдугаар сар',
    'зургаадугаар сар',
    'долоодугаар сар',
    'наймдугаар сар',
    'есдүгээр сар',
    'аравдугаар сар',
    'арваннэгдүгээр сар',
    'арван хоёрдугаар сар'
  ]
}

var dayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']
}

var formattingDayValues = {
  ...dayValues,
  wide: ['ням', 'даваа', 'мягмар', 'лхагва', 'пүрэв', 'баасан', 'бямба']
}

var dayPeriodValues = {
  narrow: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  abbreviated: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
  },
  wide: {
    am: 'ү.ө.',
    pm: 'ү.х.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'өдөр',
    evening: 'орой',
    night: 'шөнө'
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
    defaultWidth: 'wide'
  })
}

export default localize
