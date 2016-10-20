function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: '１秒以下',
      other: '{{count}}秒以下'
    },

    halfAMinute: '半分',

    lessThanXMinutes: {
      one: '１分以下',
      other: '{{count}}分以下'
    },

    xMinutes: {
      one: '１分',
      other: '{{count}}分'
    },

    aboutXHours: {
      one: '１時間ごろ',
      other: '{{count}}時間ごろ'
    },

    xDays: {
      one: '１日',
      other: '{{count}}日'
    },

    aboutXMonths: {
      one: '１ヶ月ごろ',
      other: '{{count}}ヶ月ごろ'
    },

    xMonths: {
      one: '１ヶ月',
      other: '{{count}}ヶ月'
    },

    aboutXYears: {
      one: '１年ごろ',
      other: '{{count}}年ごろ'
    },

    overXYears: {
      one: '１年以上',
      other: '{{count}}年以上'
    },

    almostXYears: {
      one: '１年以下',
      other: '{{count}}年以下'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
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

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale
