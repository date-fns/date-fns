import type {
  FormatDistanceFn,
  FormatDistanceLocale,
  FormatDistanceToken,
} from '../../../types'

type Tense = {
  present: string
  past: string
  future: string
}

type FormatDistanceTokenValue = {
  one?: Tense
  twoFour?: Tense
  other: Tense
}

// NOTE: should prolly be improved
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308

function declensionGroup(scheme: FormatDistanceTokenValue, count: number) {
  if (count === 1 && scheme.one) {
    return scheme.one
  }

  if (count >= 2 && count <= 4 && scheme.twoFour) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension(
  scheme: FormatDistanceTokenValue,
  count: number,
  time: keyof Tense
) {
  const group = declensionGroup(scheme, count)
  const finalText = group[time]
  return finalText.replace('{{count}}', String(count))
}

function extractPreposition(token: string) {
  const result = ['lessThan', 'about', 'over', 'almost'].filter(function (
    preposition
  ) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition(preposition: string) {
  let translation = ''

  if (preposition === 'almost') {
    translation = 'takmer'
  }

  if (preposition === 'about') {
    translation = 'približne'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition(preposition: string) {
  let translation = ''

  if (preposition === 'lessThan') {
    translation = 'menej než'
  }

  if (preposition === 'over') {
    translation = 'viac než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xSeconds: {
    one: {
      present: 'sekunda',
      past: 'sekundou',
      future: 'sekundu',
    },
    twoFour: {
      present: '{{count}} sekundy',
      past: '{{count}} sekundami',
      future: '{{count}} sekundy',
    },
    other: {
      present: '{{count}} sekúnd',
      past: '{{count}} sekundami',
      future: '{{count}} sekúnd',
    },
  },

  halfAMinute: {
    other: {
      present: 'pol minúty',
      past: 'pol minútou',
      future: 'pol minúty',
    },
  },

  lessThanXMinutes: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xMinutes: {
    one: {
      present: 'minúta',
      past: 'minútou',
      future: 'minútu',
    },
    twoFour: {
      present: '{{count}} minúty',
      past: '{{count}} minútami',
      future: '{{count}} minúty',
    },
    other: {
      present: '{{count}} minút',
      past: '{{count}} minútami',
      future: '{{count}} minút',
    },
  },

  aboutXHours: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xHours: {
    one: {
      present: 'hodina',
      past: 'hodinou',
      future: 'hodinu',
    },
    twoFour: {
      present: '{{count}} hodiny',
      past: '{{count}} hodinami',
      future: '{{count}} hodiny',
    },
    other: {
      present: '{{count}} hodín',
      past: '{{count}} hodinami',
      future: '{{count}} hodín',
    },
  },

  xDays: {
    one: {
      present: 'deň',
      past: 'dňom',
      future: 'deň',
    },
    twoFour: {
      present: '{{count}} dni',
      past: '{{count}} dňami',
      future: '{{count}} dni',
    },
    other: {
      present: '{{count}} dní',
      past: '{{count}} dňami',
      future: '{{count}} dní',
    },
  },

  aboutXWeeks: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xWeeks: {
    one: {
      present: 'mesiac', // TODO
      past: 'mesiacom', // TODO
      future: 'mesiac', // TODO
    },
    twoFour: {
      present: '{{count}} mesiace', // TODO
      past: '{{count}} mesiacmi', // TODO
      future: '{{count}} mesiace', // TODO
    },
    other: {
      present: '{{count}} mesiacov', // TODO
      past: '{{count}} mesiacmi', // TODO
      future: '{{count}} mesiacov', // TODO
    },
  },

  aboutXMonths: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xMonths: {
    one: {
      present: 'mesiac',
      past: 'mesiacom',
      future: 'mesiac',
    },
    twoFour: {
      present: '{{count}} mesiace',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiace',
    },
    other: {
      present: '{{count}} mesiacov',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiacov',
    },
  },

  aboutXYears: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  xYears: {
    one: {
      present: 'rok',
      past: 'rokom',
      future: 'rok',
    },
    twoFour: {
      present: '{{count}} roky',
      past: '{{count}} rokmi',
      future: '{{count}} roky',
    },
    other: {
      present: '{{count}} rokov',
      past: '{{count}} rokmi',
      future: '{{count}} rokov',
    },
  },

  overXYears: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },

  almostXYears: {
    // TODO
    one: {
      present: '',
      past: '',
      future: '',
    },
    twoFour: {
      present: '',
      past: '',
      future: '',
    },
    other: {
      present: '',
      past: '',
      future: '',
    },
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  const preposition = extractPreposition(token) || ''
  const key = lowercaseFirstLetter(
    token.substring(preposition.length)
  ) as FormatDistanceToken
  const scheme = formatDistanceLocale[key]

  if (!options?.addSuffix) {
    return (
      prefixPreposition(preposition) +
      suffixPreposition(preposition) +
      declension(scheme, count, 'present')
    )
  }

  if (options.comparison && options.comparison > 0) {
    return (
      prefixPreposition(preposition) +
      'o ' +
      suffixPreposition(preposition) +
      declension(scheme, count, 'future')
    )
  } else {
    return (
      prefixPreposition(preposition) +
      'pred ' +
      suffixPreposition(preposition) +
      declension(scheme, count, 'past')
    )
  }
}

export default formatDistance
