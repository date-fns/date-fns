import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'
import { numberToLocale } from '../localize/index'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'প্রায় ১ সেকেন্ড',
    other: 'প্রায় {{count}} সেকেন্ড',
  },

  xSeconds: {
    one: '১ সেকেন্ড',
    other: '{{count}} সেকেন্ড',
  },

  halfAMinute: 'আধ মিনিট',

  lessThanXMinutes: {
    one: 'প্রায় ১ মিনিট',
    other: 'প্রায় {{count}} মিনিট',
  },

  xMinutes: {
    one: '১ মিনিট',
    other: '{{count}} মিনিট',
  },

  aboutXHours: {
    one: 'প্রায় ১ ঘন্টা',
    other: 'প্রায় {{count}} ঘন্টা',
  },

  xHours: {
    one: '১ ঘন্টা',
    other: '{{count}} ঘন্টা',
  },

  xDays: {
    one: '১ দিন',
    other: '{{count}} দিন',
  },

  aboutXWeeks: {
    one: 'প্রায় ১ সপ্তাহ',
    other: 'প্রায় {{count}} সপ্তাহ',
  },

  xWeeks: {
    one: '১ সপ্তাহ',
    other: '{{count}} সপ্তাহ',
  },

  aboutXMonths: {
    one: 'প্রায় ১ মাস',
    other: 'প্রায় {{count}} মাস',
  },

  xMonths: {
    one: '১ মাস',
    other: '{{count}} মাস',
  },

  aboutXYears: {
    one: 'প্রায় ১ বছর',
    other: 'প্রায় {{count}} বছর',
  },

  xYears: {
    one: '১ বছর',
    other: '{{count}} বছর',
  },

  overXYears: {
    one: '১ বছরের বেশি',
    other: '{{count}} বছরের বেশি',
  },

  almostXYears: {
    one: 'প্রায় ১ বছর',
    other: 'প্রায় {{count}} বছর',
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
    result = tokenValue.other.replace('{{count}}', numberToLocale(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + ' এর মধ্যে'
    } else {
      return result + ' আগে'
    }
  }

  return result
}

export default formatDistance
