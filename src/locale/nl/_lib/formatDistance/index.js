var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'minder dan een seconde',
    other: 'minder dan {{count}} seconden'
  },

  xSeconds: {
    one: '1 seconde',
    other: '{{count}} seconden'
  },

  halfAMinute: 'een halve minuut',

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
    other: 'ongeveer {{count}} uur'
  },

  xHours: {
    one: '1 uur',
    other: '{{count}} uur'
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
    other: 'ongeveer {{count}} jaar'
  },

  xYears: {
    one: '1 jaar',
    other: '{{count}} jaar'
  },

  overXYears: {
    one: 'meer dan 1 jaar',
    other: 'meer dan {{count}} jaar'
  },

  almostXYears: {
    one: 'bijna 1 jaar',
    other: 'bijna {{count}} jaar'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'over ' + result
    } else {
      return result + ' geleden'
    }
  }

  return result
}
