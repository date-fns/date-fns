var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'nas lugha na diog',
    other: 'nas lugha na {{count}} diogan'
  },

  xSeconds: {
    one: '1 diog',
    other: '{{count}} diogan'
  },

  halfAMinute: 'leth mhionaid',

  lessThanXMinutes: {
    one: 'nas lugha na mionaid',
    other: 'nas lugha na {{count}} mionaidean'
  },

  xMinutes: {
    one: '1 mionaid',
    other: '{{count}} mionaidean'
  },

  aboutXHours: {
    one: 'mu uair de thìde',
    other: 'mu {{count}} uairean de thìde'
  },

  xHours: {
    one: '1 uair',
    other: '{{count}} uairean de thìde'
  },

  xDays: {
    one: '1 latha',
    other: '{{count}} làithean'
  },

  aboutXWeeks: {
    one: 'mu 1 seachdain',
    other: 'mu {{count}} seachdainean'
  },

  xWeeks: {
    one: '1 seachdain',
    other: '{{count}} seachdainean'
  },

  aboutXMonths: {
    one: 'mu mhìos',
    other: 'mu {{count}} mìosan'
  },

  xMonths: {
    one: '1 mìos',
    other: '{{count}} mìosan'
  },

  aboutXYears: {
    one: 'mu bhliadhna',
    other: 'mu {{count}} bliadhnaichean'
  },

  xYears: {
    one: '1 bhliadhna',
    other: '{{count}} bliadhna'
  },

  overXYears: {
    one: 'còrr is bliadhna',
    other: 'còrr is {{count}} bliadhnaichean'
  },

  almostXYears: {
    one: 'cha mhòr bliadhna',
    other: 'cha mhòr {{count}} bliadhnaichean'
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
      return 'ann an ' + result
    } else {
      return result + ' o chionn'
    }
  }

  return result
}
