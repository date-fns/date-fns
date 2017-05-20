var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '少於 1 秒',
    other: '少於 {{count}} 秒'
  },

  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },

  halfAMinute: '半分鐘',

  lessThanXMinutes: {
    one: '少於 1 分鐘',
    other: '少於 {{count}} 分鐘'
  },

  xMinutes: {
    one: '1 分鐘',
    other: '{{count}} 分鐘'
  },

  xHours: {
    one: '1 小時',
    other: '{{count}} 小時'
  },

  aboutXHours: {
    one: '大約 1 小時',
    other: '大約 {{count}} 小時'
  },

  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },

  aboutXMonths: {
    one: '大約 1 個月',
    other: '大約 {{count}} 個月'
  },

  xMonths: {
    one: '1 個月',
    other: '{{count}} 個月'
  },

  aboutXYears: {
    one: '大約 1 年',
    other: '大約 {{count}} 年'
  },

  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },

  overXYears: {
    one: '超過 1 年',
    other: '超過 {{count}} 年'
  },

  almostXYears: {
    one: '將近 1 年',
    other: '將近 {{count}} 年'
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
      return result + '內'
    } else {
      return result + '前'
    }
  }

  return result
}
