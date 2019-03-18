import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

// Note: in Turkish, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var eraValues = {
  narrow: ['MÖ', 'MS'],
  abbreviated: ['MÖ', 'MS'],
  wide: ['Milattan Önce', 'Milattan Sonra']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Çeyrek', '2. Çeyrek', '3. Çeyrek', '4. Çeyrek']
}

// Note: in Turkish, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', ''],
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
  abbreviated: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
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
    am: 'öö',
    pm: 'ös',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  abbreviated: {
    am: 'öö',
    pm: 'ös',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabah',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece'
  },
  wide: {
    am: 'öö',
    pm: 'ös',
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
    am: 'öö',
    pm: 'ös',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahleyin',
    afternoon: 'öğleden sonra',
    evening: 'akşamleyin',
    night: 'geceleyin'
  },
  abbreviated: {
    am: 'öö',
    pm: 'ös',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahleyin',
    afternoon: 'öğleden sonra',
    evening: 'akşamleyin',
    night: 'geceleyin'
  },
  wide: {
    am: 'öö',
    pm: 'ös',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahleyin',
    afternoon: 'öğleden sonra',
    evening: 'akşamleyin',
    night: 'geceleyin'
  }
}

var ordinalNumberSuffixes = {
  1: "'inci",
  5: "'inci",
  8: "'inci",
  70: "'inci",
  80: "'inci",
  2: "'nci",
  7: "'nci",
  20: "'nci",
  50: "'nci",
  3: "'üncü",
  4: "'üncü",
  100: "'üncü",
  6: "'ncı",
  9: "'uncu",
  10: "'uncu",
  30: "'uncu",
  60: "'ıncı",
  90: "'ıncı"
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  if (number === 0) {
    return "0'ıncı"
  }

  var x = number % 10
  var y = (number % 100) - x
  var z = number >= 100 ? 100 : null

  return (
    number +
    (ordinalNumberSuffixes[x] ||
      ordinalNumberSuffixes[y] ||
      ordinalNumberSuffixes[z] ||
      '')
  )
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
