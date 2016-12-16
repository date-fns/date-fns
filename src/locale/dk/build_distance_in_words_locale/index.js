function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      singular: 'mindre end et sekund',
      plural: 'mindre end {{count}} sekunder'
    },

    xSeconds: {
      singular: '1 sekund',
      plural: '{{count}} sekunder'
    },

    halfAMinute: 'et halvt minut',

    lessThanXMinutes: {
      singular: 'mindre end et minut',
      plural: 'mindre end {{count}} minutter'
    },

    xMinutes: {
      singular: '1 minut',
      plural: '{{count}} minutter'
    },

    aboutXHours: {
      singular: 'cirka 1 time',
      plural: 'cirka {{count}} timer'
    },

    xHours: {
      singular: '1 time',
      plural: '{{count}} timer'
    },

    xDays: {
      singular: '1 dag',
      plural: '{{count}} dage'
    },

    aboutXMonths: {
      singular: 'cirka 1 måned',
      plural: 'cirka {{count}} måneder'
    },

    xMonths: {
      singular: '1 måned',
      plural: '{{count}} måneder'
    },

    aboutXYears: {
      singular: 'cirka 1 år',
      plural: 'cirka {{count}} år'
    },

    xYears: {
      singular: '1 år',
      plural: '{{count}} år'
    },

    overXYears: {
      singular: 'over 1 år',
      plural: 'over {{count}} år'
    },

    almostXYears: {
      singular: 'næsten 1 år',
      plural: 'næsten {{count}} år'
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
        return 'om ' + result
      } else {
        return result + ' siden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale
