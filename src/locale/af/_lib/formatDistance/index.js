var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "minder as 'n sekonde",
    other: 'minder as {{count}} sekondes'
  },

  xSeconds: {
    one: '1 sekonde',
    other: '{{count}} sekondes'
  },

  halfAMinute: "'n halwe minuut",

  lessThanXMinutes: {
    one: "minder as 'n minuut",
    other: 'minder as {{count}} minute'
  },

  xMinutes: {
    one: "'n minuut",
    other: '{{count}} minute'
  },

  aboutXHours: {
    one: 'ongeveer 1 uur',
    other: 'ongeveer {{count}} ure'
  },

  xHours: {
    one: '1 uur',
    other: '{{count}} ure'
  },

  xDays: {
    one: '1 dag',
    other: '{{count}} dae'
  },

  aboutXMonths: {
    one: 'ongeveer 1 maand',
    other: 'ongeveer {{count}} maande'
  },

  xMonths: {
    one: '1 maand',
    other: '{{count}} maande'
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
    one: 'meer as 1 jaar',
    other: 'meer as {{count}} jaar'
  },

  almostXYears: {
    one: 'byna 1 jaar',
    other: 'byna {{count}} jaar'
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
      return 'oor ' + result
    } else {
      return result + ' gelede'
    }
  }

  return result
}
