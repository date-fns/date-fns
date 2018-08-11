var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'প্রায় 1 সেকেন্ড',
    other: 'প্রায় {{count}} সেকেন্ড'
  },

  xSeconds: {
    one: '1 সেকেন্ড',
    other: '{{count}} সেকেন্ড'
  },

  halfAMinute: 'আধমিনিট',

  lessThanXMinutes: {
    one: 'প্রায় 1 মিনিট',
    other: 'প্রায় {{count}} মিনিট'
  },

  xMinutes: {
    one: '1 মিনিট',
    other: '{{count}} মিনিট'
  },

  aboutXHours: {
    one: 'প্রায় 1 ঘন্টা',
    other: 'প্রায় {{count}} ঘন্টা'
  },

  xHours: {
    one: '1 ঘন্টা',
    other: '{{count}} ঘন্টা'
  },

  xDays: {
    one: '1 দিন',
    other: '{{count}} দিন'
  },

  aboutXMonths: {
    one: 'প্রায় 1 মাস',
    other: 'প্রায় {{count}} মাস'
  },

  xMonths: {
    one: '1 মাস',
    other: '{{count}} মাস'
  },

  aboutXYears: {
    one: 'প্রায় 1 বছর',
    other: 'প্রায় {{count}} বছর'
  },

  xYears: {
    one: '1 বছর',
    other: '{{count}} বছর'
  },

  overXYears: {
    one: '1 বছরের বেশী',
    other: '{{count}} বছরের বেশী'
  },

  almostXYears: {
    one: 'প্রায় 1 বছর',
    other: 'প্রায় {{count}} বছর'
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
      return result + ' এর মধ্যে'
    } else {
      return result + ' আগে'
    }
  }

  return result
}
