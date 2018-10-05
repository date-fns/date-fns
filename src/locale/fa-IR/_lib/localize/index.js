import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['ق م', 'ب م'],
  wide: ['قبل از میلاد', 'بعد از میلاد']
}

var quarterValues = {
  narrow: ['۱', '۲', '۳', '۴'],
  abbreviated: ['ف۱', 'ف۲', 'ف۳', 'ف۴'],
  wide: ['فصل اول', 'فصل دوم', 'فصل سوم', 'فصل چهارم']
}

var monthValues = {
  narrow: ['ژ', 'ف', 'م', 'آ', 'م', 'ج', 'ج', 'آ', 'س', 'ا', 'ن', 'د'],
  abbreviated: ['ژا', 'فو', 'ما', 'آو', 'مه', 'ژن', 'ژو', 'او', 'سپ', 'اک', 'نو', 'دس'],
  wide: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
}

var dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  short: ['یک', 'دو', 'سه', 'چه', 'پن', 'جم', 'شن'],
  abbreviated: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
  wide: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
}

var dayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'نص',
    noon: 'ظ',
    morning: 'صبح',
    afternoon: 'بعد از  ظهر',
    evening: 'عصر',
    night: 'شب'
  },
  abbreviated: {
    am: 'ق ظ',
    pm: 'ب ظ',
    midnight: 'نیمه شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعد از ظهر',
    evening: 'عصر',
    night: 'شب'
  },
  wide: {
    am: 'ق.ظ',
    pm: 'ب.ظ',
    midnight: 'نیمه شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعد از ظهر',
    evening: 'عصر',
    night: 'شب'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن ش',
    noon: 'ظ',
    morning: 'در صبح',
    afternoon: 'در بعد از ظهر',
    evening: 'در عصر',
    night: 'در شب'
  },
  abbreviated: {
    am: 'ق ظ',
    pm: 'ب ظ',
    midnight: 'نیمه شب',
    noon: 'ظهر',
    morning: 'در صبح',
    afternoon: 'در بعد از ظهر',
    evening: 'در عصر',
    night: 'در شب'
  },
  wide: {
    am: 'ق.ظ',
    pm: 'ب.ظ',
    midnight: 'نیمه شب',
    noon: 'ظهر',
    morning: 'در صبح',
    afternoon: 'در بعد از ظهر',
    evening: 'در عصر',
    night: 'در شب'
  }
}

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'م'
      case 2:
        return number + 'م'
      case 3:
        return number + 'م'
    }
  }
  return number + 'م'
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
    defaulFormattingWidth: 'wide'
  })
}

export default localize
