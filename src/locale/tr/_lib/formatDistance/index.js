var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'bir saniyeden az',
    other: '{{count}} saniyeden az'
  },

  xSeconds: {
    one: '1 saniye',
    other: '{{count}} saniye'
  },

  halfAMinute: 'yarım dakika',

  lessThanXMinutes: {
    one: 'bir dakikadan az',
    other: '{{count}} dakikadan az'
  },

  xMinutes: {
    one: '1 dakika',
    other: '{{count}} dakika'
  },

  aboutXHours: {
    one: 'yaklaşık 1 saat',
    other: 'yaklaşık {{count}} saat'
  },

  xHours: {
    one: '1 saat',
    other: '{{count}} saat'
  },

  xDays: {
    one: '1 gün',
    other: '{{count}} gün'
  },

  aboutXMonths: {
    one: 'yaklaşık 1 ay',
    other: 'yaklaşık {{count}} ay'
  },

  xMonths: {
    one: '1 ay',
    other: '{{count}} ay'
  },

  aboutXYears: {
    one: 'yaklaşık 1 yıl',
    other: 'yaklaşık {{count}} yıl'
  },

  xYears: {
    one: '1 yıl',
    other: '{{count}} yıl'
  },

  overXYears: {
    one: '1 yıldan fazla',
    other: '{{count}} yıldan fazla'
  },

  almostXYears: {
    one: 'neredeyse 1 yıl',
    other: 'neredeyse {{count}} yıl'
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
      return result + ' sonra'
    } else {
      return result + ' önce'
    }
  }

  return result
}
