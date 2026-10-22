import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types';

type FormatDistanceTokenValue = string | { one: string, other: string };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'камтар аз як сония',
    other: 'камтар аз {{count}} сония',
  },

  xSeconds: {
    one: '1 сония',
    other: '{{count}} сония',
  },

  halfAMinute: 'ним дақиқа',

  lessThanXMinutes: {
    one: 'камтар аз як дақиқа',
    other: 'камтар аз {{count}} дақиқа',
  },

  xMinutes: {
    one: '1 дақиқа',
    other: '{{count}} дақиқа',
  },

  aboutXHours: {
    one: 'тақрибан 1 соат',
    other: 'тақрибан {{count}} соат',
  },

  xHours: {
    one: '1 соат',
    other: '{{count}} соат',
  },

  xDays: {
    one: '1 рӯз',
    other: '{{count}} рӯз',
  },

  aboutXWeeks: {
    one: 'тақрибан 1 ҳафта',
    other: 'тақрибан {{count}} ҳафта',
  },

  xWeeks: {
    one: '1 ҳафта',
    other: '{{count}} ҳафта',
  },

  aboutXMonths: {
    one: 'тақрибан 1 моҳ',
    other: 'тақрибан {{count}} моҳ',
  },

  xMonths: {
    one: '1 моҳ',
    other: '{{count}} моҳ',
  },

  aboutXYears: {
    one: 'тақрибан 1 сол',
    other: 'тақрибан {{count}} сол',
  },

  xYears: {
    one: '1 сол',
    other: '{{count}} сол',
  },

  overXYears: {
    one: 'зиёда аз 1 сол',
    other: 'зиёда аз {{count}} сол',
  },

  almostXYears: {
    one: 'наздики 1 сол',
    other: 'наздики {{count}} сол',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  options = options || {}
  let result
  const tokenValue = formatDistanceLocale[token]

  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    result = tokenValue.other.replace('{{count}}', String(count))
  }

  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return `пас аз ${result}`
    } else {
      return `${result} пеш`
    }
  }

  return result
}

export default formatDistance
