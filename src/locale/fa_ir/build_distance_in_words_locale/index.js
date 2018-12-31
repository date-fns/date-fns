function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'کمتر از یک ثانیه',
      other: 'کمتر از {{count}} ثانیه'
    },

    xSeconds: {
      one: 'یک ثانیه',
      other: '{{count}} ثانیه'
    },

    halfAMinute: 'نیم دقیقه',

    lessThanXMinutes: {
      one: 'کمتر از یک دقیقه',
      other: 'کمتر از {{count}} دقیقه'
    },

    xMinutes: {
      one: 'یک دقیقه',
      other: '{{count}} دقیقه'
    },

    aboutXHours: {
      one: 'حدود یک ساعت',
      other: 'حدود {{count}} ساعت'
    },

    xHours: {
      one: 'یک ساعت',
      other: '{{count}} ساعت'
    },

    xDays: {
      one: 'یک روز',
      other: '{{count}} روز'
    },

    aboutXMonths: {
      one: 'حدود یک ماه',
      other: 'حدود {{count}} ماه'
    },

    xMonths: {
      one: 'یک ماه',
      other: '{{count}} ماه'
    },

    aboutXYears: {
      one: 'حدود یک سال',
      other: 'حدود {{count}} سال'
    },

    xYears: {
      one: 'یک سال',
      other: '{{count}} سال'
    },

    overXYears: {
      one: 'بیشتر از یک سال',
      other: 'بیشتر از {{count}} سال'
    },

    almostXYears: {
      one: 'نزدیک یک سال',
      other: 'نزدیک {{count}} سال'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'در ' + result
      } else {
        return result + ' پیش'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale
