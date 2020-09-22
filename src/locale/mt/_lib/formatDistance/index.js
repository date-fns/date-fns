var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'inqas minn sekonda',
    other: 'inqas minn {{count}} sekondi'
  },

  xSeconds: {
    one: 'sekonda',
    other: '{{count}} sekondi'
  },

  halfAMinute: 'nofs minuta',

  lessThanXMinutes: {
    one: 'inqas minn minuta',
    other: 'inqas minn {{count}} minuti'
  },

  xMinutes: {
    one: 'minuta',
    other: '{{count}} minuti'
  },

  aboutXHours: {
    one: 'madwar siegħa',
    other: 'madwar {{count}} siegħat'
  },

  xHours: {
    one: 'siegħa',
    other: '{{count}} siegħat'
  },

  xDays: {
    one: 'ġurnata',
    other: '{{count}} ġranet'
  },

  aboutXWeeks: {
    one: 'madwar ġimgħa',
    other: 'madwar {{count}} ġimgħat'
  },

  xWeeks: {
    one: 'ġimgħa',
    other: '{{count}} ġimgħat'
  },

  aboutXMonths: {
    one: 'madwar xahar',
    other: 'madwar {{count}} xhur'
  },

  xMonths: {
    one: 'xahar',
    other: '{{count}} xhur'
  },

  aboutXYears: {
    one: 'madwar sena',
    two: 'madwar sentejn',
    other: 'madwar {{count}} snin'
  },

  xYears: {
    one: 'sena',
    two: 'sentejn',
    other: '{{count}} snin'
  },

  overXYears: {
    one: 'aktar minn sena',
    two: 'aktar minn sentejn',
    other: 'aktar minn {{count}} snin'
  },

  almostXYears: {
    one: 'kważi sena',
    two: 'kważi sentejn',
    other: 'kważi {{count}} snin'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}
  var adverb = token.match(/years/i)

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else if (count === 2 && adverb) {
    result = formatDistanceLocale[token].two
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return "f'" + result
    } else {
      return result + ' ilu'
    }
  }

  return result
}
