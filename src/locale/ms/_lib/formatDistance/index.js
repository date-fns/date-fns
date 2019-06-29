var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'kurang dari 1 saat',
    other: 'kurang dari {{count}} saat'
  },

  xSeconds: {
    one: '1 saat',
    other: '{{count}} saat'
  },

  halfAMinute: 'setengah minit',

  lessThanXMinutes: {
    one: 'kurang dari 1 minit',
    other: 'kurang dari {{count}} minit'
  },

  xMinutes: {
    one: '1 minit',
    other: '{{count}} minit'
  },

  aboutXHours: {
    one: 'sekitar 1 jam',
    other: 'sekitar {{count}} jam'
  },

  xHours: {
    one: '1 jam',
    other: '{{count}} jam'
  },

  xDays: {
    one: '1 hari',
    other: '{{count}} hari'
  },

  aboutXMonths: {
    one: 'sekitar 1 bulan',
    other: 'sekitar {{count}} bulan'
  },

  xMonths: {
    one: '1 bulan',
    other: '{{count}} bulan'
  },

  aboutXYears: {
    one: 'sekitar 1 tahun',
    other: 'sekitar {{count}} tahun'
  },

  xYears: {
    one: '1 tahun',
    other: '{{count}} tahun'
  },

  overXYears: {
    one: 'lebih dari 1 tahun',
    other: 'lebih dari {{count}} tahun'
  },

  almostXYears: {
    one: 'hampir 1 tahun',
    other: 'hampir {{count}} tahun'
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
      return 'dalam masa ' + result
    } else {
      return result + ' yang lalu'
    }
  }

  return result
}
