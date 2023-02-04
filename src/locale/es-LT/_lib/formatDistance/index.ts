import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'menos de un segundo',
    other: 'menos de {{count}} segundos',
  },

  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos',
  },

  halfAMinute: 'medio minuto',

  lessThanXMinutes: {
    one: 'menos de un minuto',
    other: 'menos de {{count}} minutos',
  },

  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos',
  },

  aboutXHours: {
    one: ' 1 hora',
    other: '{{count}} horas',
  },

  xHours: {
    one: '1 hora',
    other: '{{count}} horas',
  },

  xDays: {
    one: '1 día',
    other: '{{count}} días',
  },

  aboutXWeeks: {
    one: ' 1 semana',
    other: '{{count}} semanas',
  },

  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas',
  },

  aboutXMonths: {
    one: ' 1 mes',
    other: '{{count}} meses',
  },

  xMonths: {
    one: '1 mes',
    other: '{{count}} meses',
  },

  aboutXYears: {
    one: ' 1 año',
    other: '{{count}} años',
  },

  xYears: {
    one: '1 año',
    other: '{{count}} años',
  },

  overXYears: {
    one: 'más de 1 año',
    other: 'más de {{count}} años',
  },

  almostXYears: {
    one: 'casi 1 año',
    other: 'casi {{count}} años',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result

  const tokenValue = formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString())
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'en ' + result
    } else {
      return 'hace ' + result
    }
  }

  return result
}

export default formatDistance
