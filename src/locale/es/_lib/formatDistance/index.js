var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'menos de un segundo',
    other: 'menos de {{count}} segundos'
  },

  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },

  halfAMinute: 'medio minuto',

  lessThanXMinutes: {
    one: 'menos de un minuto',
    other: 'menos de {{count}} minutos'
  },

  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },

  aboutXHours: {
    one: 'alrededor de 1 hora',
    other: 'alrededor de {{count}} horas'
  },

  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },

  xDays: {
    one: '1 día',
    other: '{{count}} días'
  },

  aboutXMonths: {
    one: 'alrededor de 1 mes',
    other: 'alrededor de {{count}} meses'
  },

  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },

  aboutXYears: {
    one: 'alrededor de 1 año',
    other: 'alrededor de {{count}} años'
  },

  xYears: {
    one: '1 año',
    other: '{{count}} años'
  },

  overXYears: {
    one: 'más de 1 año',
    other: 'más de {{count}} años'
  },

  almostXYears: {
    one: 'casi 1 año',
    other: 'casi {{count}} años'
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
      return 'en ' + result
    } else {
      return 'hace ' + result
    }
  }

  return result
}
