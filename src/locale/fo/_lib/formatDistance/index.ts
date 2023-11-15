import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'minni enn eitt sekund',
    other: 'minni enn {{count}} sekund',
  },

  xSeconds: {
    one: '1 sekund',
    other: '{{count}} sekund',
  },

  halfAMinute: 'ein hálvur minuttur',

  lessThanXMinutes: {
    one: 'minni enn ein minuttur',
    other: 'minni enn {{count}} minuttir',
  },

  xMinutes: {
    one: '1 minuttur',
    other: '{{count}} minuttir',
  },

  aboutXHours: {
    one: 'umleið 1 tími',
    other: 'umleið {{count}} tímar',
  },

  xHours: {
    one: '1 tími',
    other: '{{count}} tímar',
  },

  xDays: {
    one: '1 dagur',
    other: '{{count}} dagar',
  },

  aboutXWeeks: {
    one: 'umleið 1 vika',
    other: 'umleið {{count}} vikur',
  },

  xWeeks: {
    one: '1 vika',
    other: '{{count}} vikur',
  },

  aboutXMonths: {
    one: 'umleið 1 mánaður',
    other: 'umleið {{count}} mánaðir',
  },

  xMonths: {
    one: '1 mánaður',
    other: '{{count}} mánaðir',
  },

  aboutXYears: {
    one: 'umleið 1 ár',
    other: 'umleið {{count}} ár',
  },

  xYears: {
    one: '1 ár',
    other: '{{count}} ár',
  },

  overXYears: {
    one: 'meir enn 1 ár',
    other: 'meir enn {{count}} ár',
  },

  almostXYears: {
    one: 'næstan 1 ár',
    other: 'næstan {{count}} ár',
  },
}
const formatDistanceFutureLocale: FormatDistanceLocale<FormatDistanceTokenValue> =
  {
    ...formatDistanceLocale,

    xMinutes: {
      one: '1 minutt',
      other: '{{count}} minuttir',
    },

    xHours: {
      one: '1 tíma',
      other: '{{count}} tímar',
    },

    xDays: {
      one: '1 dag',
      other: '{{count}} dagar',
    },

    xWeeks: {
      one: '1 viku',
      other: '{{count}} vikur',
    },

    xMonths: {
      one: '1 mánað',
      other: '{{count}} mánaðir',
    },
  }

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result
  const addSuffix = options?.addSuffix
  const tokenValue = addSuffix
    ? formatDistanceFutureLocale[token]
    : formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    result = tokenValue.other.replace('{{count}}', String(count))
  }

  if (addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'um ' + result
    } else {
      return result + ' síðan'
    }
  }

  return result
}

export default formatDistance
