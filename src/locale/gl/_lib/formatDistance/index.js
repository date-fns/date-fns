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
    one: 'arredor dunha hora',
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

  aboutXWeeks: {
    one: 'arredor dunha semana',
    other: 'arredor de {{count}} semanas'
  },

  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
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
    one: 'arredor dun ano',
    other: 'arredor de {{count}} anos'
  },

  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },

  overXYears: {
    one: 'máis dun ano',
    other: 'máis de {{count}} anos'
  },

  almostXYears: {
    one: 'case un ano',
    other: 'case {{count}} anos'
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
      return 'hai ' + result
    }
  }

  return result
}
