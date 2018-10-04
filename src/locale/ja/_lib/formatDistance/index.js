var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1秒未満',
    other: '{{count}}秒未満'
  },

  xSeconds: {
    one: '1秒',
    other: '{{count}}秒'
  },

  halfAMinute: '30秒',

  lessThanXMinutes: {
    one: '1分未満',
    other: '{{count}}分未満'
  },

  xMinutes: {
    one: '1分',
    other: '{{count}}分'
  },

  aboutXHours: {
    one: '約1時間',
    other: '約{{count}}時間'
  },

  xHours: {
    one: '1時間',
    other: '{{count}}時間'
  },

  xDays: {
    one: '1日',
    other: '{{count}}日'
  },

  aboutXMonths: {
    one: '約1か月',
    other: '約{{count}}か月'
  },

  xMonths: {
    one: '1か月',
    other: '{{count}}か月'
  },

  aboutXYears: {
    one: '約1年',
    other: '約{{count}}年'
  },

  xYears: {
    one: '1年',
    other: '{{count}}年'
  },

  overXYears: {
    one: '1年以上',
    other: '{{count}}年以上'
  },

  almostXYears: {
    one: '1年近く',
    other: '{{count}}年近く'
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
      return result + '後'
    } else {
      return result + '前'
    }
  }

  return result
}
