var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1びょうみまん',
    other: '{{count}}びょうみまん',
    oneWithSuffix: 'やく1びょう',
    otherWithSuffix: 'やく{{count}}びょう',
  },

  xSeconds: {
    one: '1びょう',
    other: '{{count}}びょう',
  },

  halfAMinute: '30びょう',

  lessThanXMinutes: {
    one: '1ぷんみまん',
    other: '{{count}}ふんみまん',
    oneWithSuffix: 'やく1ぷん',
    otherWithSuffix: 'やく{{count}}ふん',
  },

  xMinutes: {
    one: '1ぷん',
    other: '{{count}}ふん',
  },

  aboutXHours: {
    one: 'やく1じかん',
    other: 'やく{{count}}じかん',
  },

  xHours: {
    one: '1じかん',
    other: '{{count}}じかん',
  },

  xDays: {
    one: '1にち',
    other: '{{count}}にち',
  },

  aboutXWeeks: {
    one: 'やく1しゅうかん',
    other: 'やく{{count}}しゅうかん',
  },

  xWeeks: {
    one: '1しゅうかん',
    other: '{{count}}しゅうかん',
  },

  aboutXMonths: {
    one: 'やく1かげつ',
    other: 'やく{{count}}かげつ',
  },

  xMonths: {
    one: '1かげつ',
    other: '{{count}}かげつ',
  },

  aboutXYears: {
    one: 'やく1ねん',
    other: 'やく{{count}}ねん',
  },

  xYears: {
    one: '1ねん',
    other: '{{count}}ねん',
  },

  overXYears: {
    one: '1ねんいじょう',
    other: '{{count}}ねんいじょう',
  },

  almostXYears: {
    one: '1ねんちかく',
    other: '{{count}}ねんちかく',
  },
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    if (options.addSuffix && formatDistanceLocale[token].oneWithSuffix) {
      result = formatDistanceLocale[token].oneWithSuffix
    } else {
      result = formatDistanceLocale[token].one
    }
  } else {
    if (options.addSuffix && formatDistanceLocale[token].otherWithSuffix) {
      result = formatDistanceLocale[token].otherWithSuffix.replace(
        '{{count}}',
        count
      )
    } else {
      result = formatDistanceLocale[token].other.replace('{{count}}', count)
    }
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + 'あと'
    } else {
      return result + 'まえ'
    }
  }

  return result
}
