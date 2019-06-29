import localize from '../localize/index.js'

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'প্রায় ১ সেকেন্ড',
    other: 'প্রায় {{count}} সেকেন্ড'
  },

  xSeconds: {
    one: '১ সেকেন্ড',
    other: '{{count}} সেকেন্ড'
  },

  halfAMinute: 'আধ মিনিট',

  lessThanXMinutes: {
    one: 'প্রায় ১ মিনিট',
    other: 'প্রায় {{count}} মিনিট'
  },

  xMinutes: {
    one: '১ মিনিট',
    other: '{{count}} মিনিট'
  },

  aboutXHours: {
    one: 'প্রায় ১ ঘন্টা',
    other: 'প্রায় {{count}} ঘন্টা'
  },

  xHours: {
    one: '১ ঘন্টা',
    other: '{{count}} ঘন্টা'
  },

  xDays: {
    one: '১ দিন',
    other: '{{count}} দিন'
  },

  aboutXMonths: {
    one: 'প্রায় ১ মাস',
    other: 'প্রায় {{count}} মাস'
  },

  xMonths: {
    one: '১ মাস',
    other: '{{count}} মাস'
  },

  aboutXYears: {
    one: 'প্রায় ১ বছর',
    other: 'প্রায় {{count}} বছর'
  },

  xYears: {
    one: '১ বছর',
    other: '{{count}} বছর'
  },

  overXYears: {
    one: '১ বছরের বেশি',
    other: '{{count}} বছরের বেশি'
  },

  almostXYears: {
    one: 'প্রায় ১ বছর',
    other: 'প্রায় {{count}} বছর'
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
    result = formatDistanceLocale[token].other.replace(
      '{{count}}',
      localize.numberToLocale(count)
    )
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + ' এর মধ্যে'
    } else {
      return result + ' আগে'
    }
  }

  return result
}
