var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'menos dun segundo',
    other: 'menos de {{count}} segundos'
  },

  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },

  halfAMinute: 'medio minuto',

  lessThanXMinutes: {
    one: 'menos dun minuto',
    other: 'menos de {{count}} minutos'
  },

  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },

  aboutXHours: {
    one: 'arredor de 1 hora',
    other: 'arredor de {{count}} horas'
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
    one: 'arredor de 1 mes',
    other: 'arredor de {{count}} meses'
  },

  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },

  aboutXYears: {
    one: 'arredor de 1 ano',
    other: 'arredor de {{count}} anos'
  },

  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },

  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },

  almostXYears: {
    one: 'casi 1 ano',
    other: 'casi {{count}} anos'
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
      return 'en ' + result
    } else {
      return 'hai ' + result
    }
  }

  return result
}
