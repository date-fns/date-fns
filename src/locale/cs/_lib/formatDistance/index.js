// v1
// function declensionGroup (scheme, count) {
//   if (count === 1) {
//     return scheme.one
//   }

//   if (count >= 2 && count <= 4) {
//     return scheme.twoFour
//   }

//   // if count === null || count === 0 || count >= 5
//   return scheme.other
// }

// function declension (scheme, count, time) {
//   var group = declensionGroup(scheme, count)
//   var finalText = group[time] || group
//   return finalText.replace('{{count}}', count)
// }

// function extractPreposition (token) {
//   var result = ['lessThan', 'about', 'over', 'almost'].filter(function (preposition) {
//     return !!token.match(new RegExp('^' + preposition))
//   })

//   return result[0]
// }

// function prefixPreposition (preposition) {
//   var translation = ''

//   if (preposition === 'almost') {
//     translation = 'skoro'
//   }

//   if (preposition === 'about') {
//     translation = 'přibližně'
//   }

//   return translation.length > 0 ? translation + ' ' : ''
// }

// function suffixPreposition (preposition) {
//   var translation = ''

//   if (preposition === 'lessThan') {
//     translation = 'méně než'
//   }

//   if (preposition === 'over') {
//     translation = 'více než'
//   }

//   return translation.length > 0 ? translation + ' ' : ''
// }

// function lowercaseFirstLetter (string) {
//   return string.charAt(0).toLowerCase() + string.slice(1)
// }

// var formatDistanceLocale = {
//   xSeconds: {
//     one: {
//       regular: 'vteřina',
//       past: 'vteřinou',
//       future: 'vteřinu'
//     },
//     twoFour: {
//       regular: '{{count}} vteřiny',
//       past: '{{count}} vteřinami',
//       future: '{{count}} vteřiny'
//     },
//     other: {
//       regular: '{{count}} vteřin',
//       past: '{{count}} vteřinami',
//       future: '{{count}} vteřin'
//     }
//   },

//   halfAMinute: {
//     other: {
//       regular: 'půl minuty',
//       past: 'půl minutou',
//       future: 'půl minuty'
//     }
//   },

//   xMinutes: {
//     one: {
//       regular: 'minuta',
//       past: 'minutou',
//       future: 'minutu'
//     },
//     twoFour: {
//       regular: '{{count}} minuty',
//       past: '{{count}} minutami',
//       future: '{{count}} minuty'
//     },
//     other: {
//       regular: '{{count}} minut',
//       past: '{{count}} minutami',
//       future: '{{count}} minut'
//     }
//   },

//   xHours: {
//     one: {
//       regular: 'hodina',
//       past: 'hodinou',
//       future: 'hodinu'
//     },
//     twoFour: {
//       regular: '{{count}} hodiny',
//       past: '{{count}} hodinami',
//       future: '{{count}} hodiny'
//     },
//     other: {
//       regular: '{{count}} hodin',
//       past: '{{count}} hodinami',
//       future: '{{count}} hodin'
//     }
//   },

//   xDays: {
//     one: {
//       regular: 'den',
//       past: 'dnem',
//       future: 'den'
//     },
//     twoFour: {
//       regular: '{{count}} dni',
//       past: '{{count}} dny',
//       future: '{{count}} dny'
//     },
//     other: {
//       regular: '{{count}} dní',
//       past: '{{count}} dny',
//       future: '{{count}} dní'
//     }
//   },

//   xMonths: {
//     one: {
//       regular: 'měsíc',
//       past: 'měsícem',
//       future: 'měsíc'
//     },
//     twoFour: {
//       regular: '{{count}} měsíce',
//       past: '{{count}} měsíci',
//       future: '{{count}} měsíce'
//     },
//     other: {
//       regular: '{{count}} měsíců',
//       past: '{{count}} měsíci',
//       future: '{{count}} měsíců'
//     }
//   },

//   xYears: {
//     one: {
//       regular: 'rok',
//       past: 'rokem',
//       future: 'rok'
//     },
//     twoFour: {
//       regular: '{{count}} roky',
//       past: '{{count}} roky',
//       future: '{{count}} roky'
//     },
//     other: {
//       regular: '{{count}} roků',
//       past: '{{count}} roky',
//       future: '{{count}} roků'
//     }
//   }
// }

// v2
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  // xSeconds: {
  //   one: '1 second',
  //   other: '{{count}} seconds'
  // },
  xSeconds: {
    one: {
      regular: 'vteřina',
      past: 'vteřinou',
      future: 'vteřinu'
    },
    twoFour: {
      regular: '{{count}} vteřiny',
      past: '{{count}} vteřinami',
      future: '{{count}} vteřiny'
    },
    other: {
      regular: '{{count}} vteřin',
      past: '{{count}} vteřinami',
      future: '{{count}} vteřin'
    }
  },

  //halfAMinute: 'half a minute',
  halfAMinute: {
    other: {
      regular: 'půl minuty',
      past: 'půl minutou',
      future: 'půl minuty'
    }
  },

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  // xMinutes: {
  //   one: '1 minute',
  //   other: '{{count}} minutes'
  // },
  xMinutes: {
    one: {
      regular: 'minuta',
      past: 'minutou',
      future: 'minutu'
    },
    twoFour: {
      regular: '{{count}} minuty',
      past: '{{count}} minutami',
      future: '{{count}} minuty'
    },
    other: {
      regular: '{{count}} minut',
      past: '{{count}} minutami',
      future: '{{count}} minut'
    }
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  // xHours: {
  //   one: '1 hour',
  //   other: '{{count}} hours'
  // },
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
      regular: '{{count}} hodin',
      past: '{{count}} hodinami',
      future: '{{count}} hodin'
    }
  },

  // xDays: {
  //   one: '1 day',
  //   other: '{{count}} days'
  // },
  xDays: {
    one: {
      regular: 'den',
      past: 'dnem',
      future: 'den'
    },
    twoFour: {
      regular: '{{count}} dni',
      past: '{{count}} dny',
      future: '{{count}} dny'
    },
    other: {
      regular: '{{count}} dní',
      past: '{{count}} dny',
      future: '{{count}} dní'
    }
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  // xMonths: {
  //   one: '1 month',
  //   other: '{{count}} months'
  // },
  xMonths: {
    one: {
      regular: 'měsíc',
      past: 'měsícem',
      future: 'měsíc'
    },
    twoFour: {
      regular: '{{count}} měsíce',
      past: '{{count}} měsíci',
      future: '{{count}} měsíce'
    },
    other: {
      regular: '{{count}} měsíců',
      past: '{{count}} měsíci',
      future: '{{count}} měsíců'
    }
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  // xYears: {
  //   one: '1 year',
  //   other: '{{count}} years'
  // },
  xYears: {
    one: {
      regular: 'rok',
      past: 'rokem',
      future: 'rok'
    },
    twoFour: {
      regular: '{{count}} roky',
      past: '{{count}} roky',
      future: '{{count}} roky'
    },
    other: {
      regular: '{{count}} roků',
      past: '{{count}} roky',
      future: '{{count}} roků'
    }
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
}

// v1
// export default function formatDistance (token, count, options) {
//   options = options || {}

//   var preposition = extractPreposition(token) || ''
//   var key = lowercaseFirstLetter(token.substring(preposition.length))
//   var scheme = formatDistanceLocale[key]

//   if (!options.addSuffix) {
//     return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, 'regular')
//   }

//   if (options.comparison > 0) {
//     return prefixPreposition(preposition) + 'za ' + suffixPreposition(preposition) + declension(scheme, count, 'future')
//   } else {
//     return prefixPreposition(preposition) + 'před ' + suffixPreposition(preposition) + declension(scheme, count, 'past')
//   }
// }

// v2
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
      return 'za ' + result
    } else {
      return result + ' před'
    }
  }

  return result
}
