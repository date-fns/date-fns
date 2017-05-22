var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'mindre enn ett sekund',
    other: 'mindre enn {{count}} sekunder'
  },

  xSeconds: {
    one: 'ett sekund',
    other: '{{count}} sekunder'
  },

  halfAMinute: 'et halvt minutt',

  lessThanXMinutes: {
    one: 'mindre enn ett minutt',
    other: 'mindre enn {{count}} minutter'
  },

  xMinutes: {
    one: 'ett minutt',
    other: '{{count}} minutter'
  },

  aboutXHours: {
    one: 'rundt en time',
    other: 'rundt {{count}} timer'
  },

  xHours: {
    one: 'en time',
    other: '{{count}} timer'
  },

  xDays: {
    one: 'en dag',
    other: '{{count}} dager'
  },

  aboutXMonths: {
    one: 'rundt en måned',
    other: 'rundt {{count}} måneder'
  },

  xMonths: {
    one: 'en måned',
    other: '{{count}} måneder'
  },

  aboutXYears: {
    one: 'rundt ett år',
    other: 'rundt {{count}} år'
  },

  xYears: {
    one: 'ett år',
    other: '{{count}} år'
  },

  overXYears: {
    one: 'over ett år',
    other: 'over {{count}} år'
  },

  almostXYears: {
    one: 'nesten ett år',
    other: 'nesten {{count}} år'
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
      return 'om ' + result
    } else {
      return result + ' siden'
    }
  }

  return result
}
