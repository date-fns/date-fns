var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '不到 1 秒',
    other: '不到 {{count}} 秒'
  },

  xSeconds: {
    one: '1 秒',
    other: '{{count}} 秒'
  },

  halfAMinute: '半分钟',

  lessThanXMinutes: {
    one: '不到 1 分钟',
    other: '不到 {{count}} 分钟'
  },

  xMinutes: {
    one: '1 分钟',
    other: '{{count}} 分钟'
  },

  xHours: {
    one: '1 小时',
    other: '{{count}} 小时'
  },

  aboutXHours: {
    one: '大约 1 小时',
    other: '大约 {{count}} 小时'
  },

  xDays: {
    one: '1 天',
    other: '{{count}} 天'
  },

  aboutXMonths: {
    one: '大约 1 个月',
    other: '大约 {{count}} 个月'
  },

  xMonths: {
    one: '1 个月',
    other: '{{count}} 个月'
  },

  aboutXYears: {
    one: '大约 1 年',
    other: '大约 {{count}} 年'
  },

  xYears: {
    one: '1 年',
    other: '{{count}} 年'
  },

  overXYears: {
    one: '超过 1 年',
    other: '超过 {{count}} 年'
  },

  almostXYears: {
    one: '将近 1 年',
    other: '将近 {{count}} 年'
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
      return result + '内'
    } else {
      return result + '前'
    }
  }

  return result
}
