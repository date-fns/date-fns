var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'llai na eiliad',
    other: 'llai na {{count}} eiliad'
  },

  xSeconds: {
    one: '1 eiliad',
    other: '{{count}} eiliad'
  },

  halfAMinute: 'hanner munud',

  lessThanXMinutes: {
    one: 'llai na munud',
    two: 'llai na 2 funud',
    other: 'llai na {{count}} munud'
  },

  xMinutes: {
    one: '1 funud',
    two: '2 funud',
    other: '{{count}} munud'
  },

  aboutXHours: {
    one: 'tua 1 awr',
    other: 'tua {{count}} awr'
  },

  xHours: {
    one: '1 awr',
    other: '{{count}} awr'
  },

  xDays: {
    one: '1 diwrnod',
    other: '{{count}} diwrnod'
  },

  aboutXMonths: {
    one: 'tua 1 mis',
    two: 'tua 2 fis',
    other: 'tua {{count}} mis'
  },

  xMonths: {
    one: '1 mis',
    two: '2 fis',
    other: '{{count}} mis'
  },

  aboutXYears: {
    one: 'tua 1 flwyddyn',
    two: 'tua 2 flynedd',
    other: 'tua {{count}} mlynedd'
  },

  xYears: {
    one: '1 flwyddyn',
    two: '2 flynedd',
    other: '{{count}} mlynedd'
  },

  overXYears: {
    one: 'dros 1 flwyddyn',
    two: 'dros 2 flynedd',
    other: 'dros {{count}} mlynedd'
  },

  almostXYears: {
    one: 'bron 1 flwyddyn',
    two: 'bron 2 flynedd',
    other: 'bron {{count}} mlynedd'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else if (count === 2 && !!formatDistanceLocale[token].two) {
    result = formatDistanceLocale[token].two
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'mewn ' + result
    } else {
      return result + ' yn ôl'
    }
  }

  return result
}
