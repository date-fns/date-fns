import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'по-малко от секунда',
    other: 'по-малко от {{count}} секунди',
  },

  xSeconds: {
    one: '1 секунда',
    other: '{{count}} секунди',
  },

  halfAMinute: 'половин минута',

  lessThanXMinutes: {
    one: 'по-малко от минута',
    other: 'по-малко от {{count}} минути',
  },

  xMinutes: {
    one: '1 минута',
    other: '{{count}} минути',
  },

  aboutXHours: {
    one: 'около час',
    other: 'около {{count}} часа',
  },

  xHours: {
    one: '1 час',
    other: '{{count}} часа',
  },

  xDays: {
    one: '1 ден',
    other: '{{count}} дни',
  },

  aboutXWeeks: {
    one: 'около седмица',
    other: 'около {{count}} седмици',
  },

  xWeeks: {
    one: '1 седмица',
    other: '{{count}} седмици',
  },

  aboutXMonths: {
    one: 'около месец',
    other: 'около {{count}} месеца',
  },

  xMonths: {
    one: '1 месец',
    other: '{{count}} месеца',
  },

  aboutXYears: {
    one: 'около година',
    other: 'около {{count}} години',
  },

  xYears: {
    one: '1 година',
    other: '{{count}} години',
  },

  overXYears: {
    one: 'над година',
    other: 'над {{count}} години',
  },

  almostXYears: {
    one: 'почти година',
    other: 'почти {{count}} години',
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
    result = tokenValue.other.replace('{{count}}', String(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'след ' + result
    } else {
      return 'преди ' + result
    }
  }

  return result
}

export default formatDistance
