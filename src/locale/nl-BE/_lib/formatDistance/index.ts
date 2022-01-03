import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'minder dan een seconde',
    other: 'minder dan {{count}} seconden',
  },

  xSeconds: {
    one: '1 seconde',
    other: '{{count}} seconden',
  },

  halfAMinute: 'een halve minuut',

  lessThanXMinutes: {
    one: 'minder dan een minuut',
    other: 'minder dan {{count}} minuten',
  },

  xMinutes: {
    one: 'een minuut',
    other: '{{count}} minuten',
  },

  aboutXHours: {
    one: 'ongeveer 1 uur',
    other: 'ongeveer {{count}} uur',
  },

  xHours: {
    one: '1 uur',
    other: '{{count}} uur',
  },

  xDays: {
    one: '1 dag',
    other: '{{count}} dagen',
  },

  aboutXWeeks: {
    one: 'ongeveer 1 week',
    other: 'ongeveer {{count}} weken',
  },

  xWeeks: {
    one: '1 week',
    other: '{{count}} weken',
  },

  aboutXMonths: {
    one: 'ongeveer 1 maand',
    other: 'ongeveer {{count}} maanden',
  },

  xMonths: {
    one: '1 maand',
    other: '{{count}} maanden',
  },

  aboutXYears: {
    one: 'ongeveer 1 jaar',
    other: 'ongeveer {{count}} jaar',
  },

  xYears: {
    one: '1 jaar',
    other: '{{count}} jaar',
  },

  overXYears: {
    one: 'meer dan 1 jaar',
    other: 'meer dan {{count}} jaar',
  },

  almostXYears: {
    one: 'bijna 1 jaar',
    other: 'bijna {{count}} jaar',
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
      return 'over ' + result
    } else {
      return result + ' geleden'
    }
  }

  return result
}

export default formatDistance
