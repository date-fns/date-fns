export default function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'minder dan een seconde',
      other: 'minder dan {{count}} seconden'
    },

    xSeconds: {
      one: '1 seconde',
      other: '{{count}} seconden'
    },

    halfAMinute: 'halve minuut',

    lessThanXMinutes: {
      one: 'minder dan een minuut',
      other: 'minder dan {{count}} minuten'
    },

    xMinutes: {
      one: 'een minuut',
      other: '{{count}} minuten'
    },

    aboutXHours: {
      one: 'ongeveer 1 uur',
      other: 'ongeveer {{count}} uren'
    },

    xHours: {
      one: '1 uur',
      other: '{{count}} uren'
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dagen'
    },

    aboutXMonths: {
      one: 'ongeveer 1 maand',
      other: 'ongeveer {{count}} maanden'
    },

    xMonths: {
      one: '1 maand',
      other: '{{count}} maanden'
    },

    aboutXYears: {
      one: 'ongeveer 1 jaar',
      other: 'ongeveer {{count}} jaren'
    },

    xYears: {
      one: '1 jaar',
      other: '{{count}} jaren'
    },

    overXYears: {
      one: 'over 1 jaar',
      other: 'over {{count}} jaren'
    },

    almostXYears: {
      one: 'bijna 1 jaar',
      other: 'bijna {{count}} jaren'
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
        return result + ' geleden'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}
