var formatDistanceLocale = {
  lessThanXSeconds: {
    one: translate,
    other: translate
  },

  xSeconds: {
    one: translate,
    other: translate
  },

  halfAMinute: 'fél perce',

  lessThanXMinutes: {
    one: translate,
    other: translate
  },

  xMinutes: {
    one: translate,
    other: translate
  },

  aboutXHours: {
    one: translate,
    other: translate
  },

  xHours: {
    one: translate,
    other: translate
  },

  xDays: {
    one: translate,
    other: translate
  },

  aboutXMonths: {
    one: translate,
    other: translate
  },

  xMonths: {
    one: translate,
    other: translate
  },

  aboutXYears: {
    one: translate,
    other: translate
  },

  xYears: {
    one: translate,
    other: translate
  },

  overXYears: {
    one: translate,
    other: translate
  },

  almostXYears: {
    one: translate,
    other: translate
  }
}

var translations = {
  'about': 'körülbelül',
  'over': 'több mint',
  'almost': 'majdnem',
  'lessthan': 'kevesebb, mint'
}

function translate (number, addSuffix, key, isFuture) {
  var num = number
  switch (key) {
    case 'xseconds_one':
      return (isFuture || !addSuffix) ? 'néhány másodperc' : 'néhány másodperce'
    case 'xseconds_other':
      return num + ((isFuture || !addSuffix) ? ' másodperc' : ' másodperce')
    case 'xminutes_one':
      return 'egy' + (isFuture || !addSuffix ? ' perc' : ' perce')
    case 'xminutes_other':
      return num + ((isFuture || !addSuffix ? ' perc' : ' perce'))
    case 'xhours_one':
      return 'egy' + (isFuture || !addSuffix ? ' óra' : ' órája')
    case 'xhours_other':
      return num + ((isFuture || !addSuffix ? ' óra' : ' órája'))
    case 'xdays_one':
      return 'egy' + (isFuture || !addSuffix ? ' nap' : ' napja')
    case 'xdays_other':
      return num + ((isFuture || !addSuffix ? ' nap' : ' napja'))
    case 'xmonths_one':
      return 'egy' + (isFuture || !addSuffix ? ' hónap' : ' hónapja')
    case 'xmonths_other':
      return num + ((isFuture || !addSuffix ? ' hónap' : ' hónapja'))
    case 'xyears_one':
      return 'egy' + (isFuture || !addSuffix ? ' év' : ' éve')
    case 'xyears_other':
      return num + ((isFuture || !addSuffix ? ' év' : ' éve'))
  }
  return ''
}

export default function formatDistance (token, count, options) {
  options = options || {}
  var adverb = token.match(/about|over|almost|lessthan/i)
  var unit = token.replace(adverb, '')

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one(count, options.addSuffix, unit.toLowerCase() + '_one', options.comparison > 0)
  } else {
    result = formatDistanceLocale[token].other(count, options.addSuffix, unit.toLowerCase() + '_other', options.comparison > 0)
  }

  if (adverb) {
    result = translations[adverb[0].toLowerCase()] + ' ' + result
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + ' múlva'
    } else {
      return result + ' ezelőtt'
    }
  }

  return result
}
