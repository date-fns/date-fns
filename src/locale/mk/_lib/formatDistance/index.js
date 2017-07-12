var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'помалку од секунда',
    other: 'помалку од {{count}} секунди'
  },

  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди'
  },

  halfAMinute: 'половина минута',

  lessThanXMinutes: {
    one: 'помалку од минута',
    other: 'помалку од {{count}} минути'
  },

  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути'
  },

  aboutXHours: {
    one: 'околу 1 час',
    other: 'околу {{count}} часа'
  },

  xHours: {
    one: '1 час',
    other: '{{count}} часа'
  },

  xDays: {
    one: '1 ден',
    other: '{{count}} дена'
  },

  aboutXMonths: {
    one: 'околу 1 месец',
    other: 'околу {{count}} месеци'
  },

  xMonths: {
    one: '1 месец',
    other: '{{count}} месеци'
  },

  aboutXYears: {
    one: 'околу 1 година',
    other: 'околу {{count}} години'
  },

  xYears: {
    one: '1 година',
    other: '{{count}} години'
  },

  overXYears: {
    one: 'повеќе од 1 година',
    other: 'повеќе од {{count}} години'
  },

  almostXYears: {
    one: 'безмалку 1 година',
    other: 'безмалку {{count}} години'
  }
}

export default function formatDistance (token, count, options) {
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
      return 'за ' + result
    } else {
      return 'пред ' + result
    }
  }

  return result
}
