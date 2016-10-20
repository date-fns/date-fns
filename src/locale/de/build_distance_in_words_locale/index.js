function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'weniger als einer Sekunde',
      other: 'weniger als {{count}} Sekunden'
    },

    halfAMinute: 'einer halben Minute',

    lessThanXMinutes: {
      one: 'weniger als einer Minute',
      other: 'weniger als {{count}} Minuten'
    },

    xMinutes: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    },

    aboutXHours: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    },

    xDays: {
      one: '1 Tag',
      other: '{{count}} Tagen'
    },

    aboutXMonths: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monaten'
    },

    xMonths: {
      one: '1 Monat',
      other: '{{count}} Monaten'
    },

    aboutXYears: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahren'
    },

    overXYears: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahren'
    },

    almostXYears: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahren'
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
        return 'in ' + result
      } else {
        return 'vor ' + result
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale
