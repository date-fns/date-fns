import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  abbreviated: ['MÖ', 'MS'],
  narrow: ['MÖ', 'MS'],
  wide: ['milattan önce', 'milattan sonra']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1Ç', '2Ç', '3Ç', '4Ç'],
  wide: ['İlk çeyrek', 'İkinci Çeyrek', 'Üçüncü çeyrek', 'Son çeyrek']
}

var monthValues = {
  narrow: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
  abbreviated: [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara'
  ],
  wide: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
  ]
}

var dayValues = {
  narrow: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  short: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
  abbreviated: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
  wide: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  wide: {
    am: 'A.M.',
    pm: 'P.M.',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  }
}

var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  wide: {
    am: 'A.M.',
    pm: 'P.M.',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  }
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "'inci"
      case 2:
        return number + "'inci"
      case 3:
        return number + "'üncü"
      case 4:
        return number + "'üncü"
      case 5:
        return number + "'inci"
      case 6:
        return number + "'ıncı"
      case 7:
        return number + "'inci"
      case 8:
        return number + "'inci"
      case 9:
        return number + "'uncu"
      case 10:
        return number + "'uncu"
      case 20:
        return number + "'inci"
      case 30:
        return number + "'uncu"
      case 50:
        return number + "'inci"
      case 60:
        return number + "'ıncı"
      case 70:
        return number + "'inci"
      case 80:
        return number + "'inci"
      case 90:
        return number + "'ıncı"
      case 100:
        return number + "'üncü"
    }
  }
  return number + '.'
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
