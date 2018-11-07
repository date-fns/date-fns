import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import utils from '../utils.js'
var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['پیش از مسیح', 'پس از مسیح']
}

var quarterValues = {
  narrow: ['۱', '۲', '۳', '۴'],
  abbreviated: ['چهارک ۱', 'چهارک ۲', 'چهارک ۳', 'چهارک ۴'],
  wide: ['یک چهارم نخست', 'یک چهارم دوم', 'یک چهارم سوم', 'یک چهارم نهایی']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'ژان',
    'فور',
    'مار',
    'آور',
    'مه',
    'ژو‌ئ',
    'ژوئ',
    'اوت',
    'سپت',
    'اکت',
    'نوا',
    'دسا'
  ],
  wide: [
    'ژانویه',
    'فوریه',
    'مارس',
    'آوریل',
    'مه',
    'ژو‌ئن',
    'ژوئیه',
    'اوت',
    'سپتامبر',
    'اکتبر',
    'نوامبر',
    'دسامبر'
  ]
}

var dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'آ', 'ش'],
  short: ['۱ش', '۲ش', '۳ش', '۴ش', '۵ش', 'آ', 'ش'],
  abbreviated: ['یک ش', 'دو ش', 'سه ش', 'چهار ش', 'پنج ش', 'آدینه', 'شنبه'],
  wide: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'آدینه', 'شنبه']
}

var dayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  },
  wide: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  },
  wide: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه شب',
    noon: 'نیم روز',
    morning: 'بامداد',
    afternoon: 'عصر',
    evening: 'غروب',
    night: 'شب'
  }
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
  if (dirtyOptions.unit === 'date') {
    return utils.eng2per(number) + 'م'
  }

  return utils.eng2per(number) + 'مین'
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
    defaulFormattingWidth: 'wide'
  })
}

export default localize
