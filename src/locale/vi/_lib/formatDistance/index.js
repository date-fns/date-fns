var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'dưới 1 giây',
    other: 'dưới {{count}} giây'
  },

  xSeconds: {
    one: '1 giây',
    other: '{{count}} giây'
  },

  halfAMinute: 'nửa phút',

  lessThanXMinutes: {
    one: 'dưới 1 phút',
    other: 'dưới {{count}} phút'
  },

  xMinutes: {
    one: '1 phút',
    other: '{{count}} phút'
  },

  aboutXHours: {
    one: 'khoảng 1 giờ',
    other: 'khoảng {{count}} giờ'
  },

  xHours: {
    one: '1 giờ',
    other: '{{count}} giờ'
  },

  xDays: {
    one: '1 ngày',
    other: '{{count}} ngày'
  },

  aboutXMonths: {
    one: 'khoảng 1 tháng',
    other: 'khoảng {{count}} tháng'
  },

  xMonths: {
    one: '1 tháng',
    other: '{{count}} tháng'
  },

  aboutXYears: {
    one: 'khoảng 1 năm',
    other: 'khoảng {{count}} năm'
  },

  xYears: {
    one: '1 năm',
    other: '{{count}} năm'
  },

  overXYears: {
    one: 'hơn 1 năm',
    other: 'hơn {{count}} năm'
  },

  almostXYears: {
    one: 'gần 1 năm',
    other: 'gần {{count}} năm'
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
      return result + ' nữa'
    } else {
      return result + ' trước'
    }
  }

  return result
}
