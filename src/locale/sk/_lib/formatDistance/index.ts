// NOTE: should prolly be improved
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308

function declensionGroup(scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  if (count >= 2 && count <= 4) {
    return scheme.twoFour
  }

  // if count === null || count === 0 || count >= 5
  return scheme.other
}

function declension(scheme, count, time) {
  const group = declensionGroup(scheme, count)
  const finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function extractPreposition(token) {
  const result = ['lessThan', 'about', 'over', 'almost'].filter(function(
    preposition
  ) {
    return !!token.match(new RegExp('^' + preposition))
  })

  return result[0]
}

function prefixPreposition(preposition) {
  const translation = ''

  if (preposition === 'almost') {
    translation = 'takmer'
  }

  if (preposition === 'about') {
    translation = 'približne'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function suffixPreposition(preposition) {
  const translation = ''

  if (preposition === 'lessThan') {
    translation = 'menej než'
  }

  if (preposition === 'over') {
    translation = 'viac než'
  }

  return translation.length > 0 ? translation + ' ' : ''
}

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

const formatDistanceLocale = {
  xSeconds: {
    one: {
      regular: 'sekunda',
      past: 'sekundou',
      future: 'sekundu'
    },
    twoFour: {
      regular: '{{count}} sekundy',
      past: '{{count}} sekundami',
      future: '{{count}} sekundy'
    },
    other: {
      regular: '{{count}} sekúnd',
      past: '{{count}} sekundami',
      future: '{{count}} sekúnd'
    }
  },

  halfAMinute: {
    other: {
      regular: 'pol minúty',
      past: 'pol minútou',
      future: 'pol minúty'
    }
  },

  xMinutes: {
    one: {
      regular: 'minúta',
      past: 'minútou',
      future: 'minútu'
    },
    twoFour: {
      regular: '{{count}} minúty',
      past: '{{count}} minútami',
      future: '{{count}} minúty'
    },
    other: {
      regular: '{{count}} minút',
      past: '{{count}} minútami',
      future: '{{count}} minút'
    }
  },

  xHours: {
    one: {
      regular: 'hodina',
      past: 'hodinou',
      future: 'hodinu'
    },
    twoFour: {
      regular: '{{count}} hodiny',
      past: '{{count}} hodinami',
      future: '{{count}} hodiny'
    },
    other: {
      regular: '{{count}} hodín',
      past: '{{count}} hodinami',
      future: '{{count}} hodín'
    }
  },

  xDays: {
    one: {
      regular: 'deň',
      past: 'dňom',
      future: 'deň'
    },
    twoFour: {
      regular: '{{count}} dni',
      past: '{{count}} dňami',
      future: '{{count}} dni'
    },
    other: {
      regular: '{{count}} dní',
      past: '{{count}} dňami',
      future: '{{count}} dní'
    }
  },

  xWeeks: {
    one: {
      regular: 'mesiac', // TODO
      past: 'mesiacom', // TODO
      future: 'mesiac' // TODO
    },
    twoFour: {
      regular: '{{count}} mesiace', // TODO
      past: '{{count}} mesiacmi', // TODO
      future: '{{count}} mesiace' // TODO
    },
    other: {
      regular: '{{count}} mesiacov', // TODO
      past: '{{count}} mesiacmi', // TODO
      future: '{{count}} mesiacov' // TODO
    }
  },

  xMonths: {
    one: {
      regular: 'mesiac',
      past: 'mesiacom',
      future: 'mesiac'
    },
    twoFour: {
      regular: '{{count}} mesiace',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiace'
    },
    other: {
      regular: '{{count}} mesiacov',
      past: '{{count}} mesiacmi',
      future: '{{count}} mesiacov'
    }
  },

  xYears: {
    one: {
      regular: 'rok',
      past: 'rokom',
      future: 'rok'
    },
    twoFour: {
      regular: '{{count}} roky',
      past: '{{count}} rokmi',
      future: '{{count}} roky'
    },
    other: {
      regular: '{{count}} rokov',
      past: '{{count}} rokmi',
      future: '{{count}} rokov'
    }
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  const preposition = extractPreposition(token) || ''
  const key = lowercaseFirstLetter(token.substring(preposition.length))
  const scheme = formatDistanceLocale[key]

  if (!options.addSuffix) {
    return (
      prefixPreposition(preposition) +
      suffixPreposition(preposition) +
      declension(scheme, count, 'regular')
    )
  }

  if (options.comparison > 0) {
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
