import type { FormatDistanceFn } from '../../../types'

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

const formatDistanceLocale = {
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

  xWeeks: {
    one: {
      present: 'týždeň',
      past: 'týždňom',
      future: 'týždeň',
    },
    twoFour: {
      present: '{{count}} týždne',
      past: '{{count}} týždňami',
      future: '{{count}} týždne',
    },
    other: {
      present: '{{count}} týždňov',
      past: '{{count}} týždňami',
      future: '{{count}} týždňov',
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
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  const preposition = extractPreposition(token) || ''
  const key = lowercaseFirstLetter(
    token.substring(preposition.length)
  ) as keyof typeof formatDistanceLocale
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
