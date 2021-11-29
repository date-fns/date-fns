import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['BC', 'AC'],
  abbreviated: ['きげんぜん', 'せいれき'],
  wide: ['きげんぜん', 'せいれき'],
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['だい1しはんき', 'だい2しはんき', 'だい3しはんき', 'だい4しはんき'],
}

var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: [
    '1がつ',
    '2がつ',
    '3がつ',
    '4がつ',
    '5がつ',
    '6がつ',
    '7がつ',
    '8がつ',
    '9がつ',
    '10がつ',
    '11がつ',
    '12がつ',
  ],
  wide: [
    '1がつ',
    '2がつ',
    '3がつ',
    '4がつ',
    '5がつ',
    '6がつ',
    '7がつ',
    '8がつ',
    '9がつ',
    '10がつ',
    '11がつ',
    '12がつ',
  ],
}

var dayValues = {
  narrow: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  short: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  abbreviated: ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'],
  wide: [
    'にちようび',
    'げつようび',
    'かようび',
    'すいようび',
    'もくようび',
    'きんようび',
    'どようび',
  ],
}

var dayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  abbreviated: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
  wide: {
    am: 'ごぜん',
    pm: 'ごご',
    midnight: 'しんや',
    noon: 'しょうご',
    morning: 'あさ',
    afternoon: 'ごご',
    evening: 'よる',
    night: 'しんや',
  },
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
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

  var options = dirtyOptions || {}
  var unit = String(options.unit)

  switch (unit) {
    case 'year':
      return `${number}ねん`
    case 'quarter':
      return `だい${number}しはんき`
    case 'month':
      return `${number}がつ`
    case 'week':
      return `だい${number}しゅう`
    case 'date':
      return `${number}にち`
    case 'hour':
      return `${number}じ`
    case 'minute':
      return `${number}ふん`
    case 'second':
      return `${number}びょう`
    default:
      return `${number}`
  }
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    },
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
