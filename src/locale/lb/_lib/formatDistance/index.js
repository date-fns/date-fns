var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: 'manner wéi eng Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    },
    withPreposition: {
      one: 'manner wéi enger Sekonn',
      other: 'manner wéi {{count}} Sekonnen'
    }
  },

  xSeconds: {
    standalone: {
      one: 'eng Sekonn',
      other: '{{count}} Sekonnen'
    },
    withPreposition: {
      one: 'enger Sekonn',
      other: '{{count}} Sekonnen'
    }
  },

  halfAMinute: {
    standalone: 'eng hallef Minutt',
    withPreposition: 'enger hallwer Minutt'
  },

  lessThanXMinutes: {
    standalone: {
      one: 'manner wéi eng Minutt',
      other: 'manner wéi {{count}} Minutten'
    },
    withPreposition: {
      one: 'manner wéi enger Minutt',
      other: 'manner wéi {{count}} Minutten'
    }
  },

  xMinutes: {
    standalone: {
      one: 'eng Minutt',
      other: '{{count}} Minutten'
    },
    withPreposition: {
      one: 'enger Minutt',
      other: '{{count}} Minutten'
    }
  },

  aboutXHours: {
    standalone: {
      one: 'ongeféier eng Stonn',
      other: 'ongeféier {{count}} Stonnen'
    },
    withPreposition: {
      one: 'ongeféier enger Stonn',
      other: 'ongeféier {{count}} Stonnen'
    }
  },

  xHours: {
    standalone: {
      one: 'eng Stonn',
      other: '{{count}} Stonnen'
    },
    withPreposition: {
      one: 'enger Stonn',
      other: '{{count}} Stonnen'
    }
  },

  xDays: {
    standalone: {
      one: 'een Dag',
      other: '{{count}} Deeg'
    },
    withPreposition: {
      one: 'engem Dag',
      other: '{{count}} Deeg'
    }
  },

  aboutXWeeks: {
    standalone: {
      one: 'ongeféier eng Woch',
      other: 'ongeféier {{count}} Wochen'
    },
    withPreposition: {
      one: 'ongeféier enger Woche',
      other: 'ongeféier {{count}} Wochen'
    }
  },

  xWeeks: {
    standalone: {
      one: 'eng Woch',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: 'enger Woch',
      other: '{{count}} Wochen'
    }
  },

  aboutXMonths: {
    standalone: {
      one: 'ongeféier ee Mount',
      other: 'ongeféier {{count}} Méint'
    },
    withPreposition: {
      one: 'ongeféier engem Mount',
      other: 'ongeféier {{count}} Méint'
    }
  },

  xMonths: {
    standalone: {
      one: 'ee Mount',
      other: '{{count}} Méint'
    },
    withPreposition: {
      one: 'engem Mount',
      other: '{{count}} Méint'
    }
  },

  aboutXYears: {
    standalone: {
      one: 'ongeféier ee Joer',
      other: 'ongeféier {{count}} Joer'
    },
    withPreposition: {
      one: 'ongeféier engem Joer',
      other: 'ongeféier {{count}} Joer'
    }
  },

  xYears: {
    standalone: {
      one: 'ee Joer',
      other: '{{count}} Joer'
    },
    withPreposition: {
      one: 'engem Joer',
      other: '{{count}} Joer'
    }
  },

  overXYears: {
    standalone: {
      one: 'méi wéi ee Joer',
      other: 'méi wéi {{count}} Joer'
    },
    withPreposition: {
      one: 'méi wéi engem Joer',
      other: 'méi wéi {{count}} Joer'
    }
  },

  almostXYears: {
    standalone: {
      one: 'bal ee Joer',
      other: 'bal {{count}} Joer'
    },
    withPreposition: {
      one: 'bal engem Joer',
      other: 'bal {{count}} Joer'
    }
  }
}

var EXCEPTION_CONSONANTS = ['d', 'h', 'n', 't', 'z']
var VOWELS = ['a,', 'e', 'i', 'o', 'u']
var DIGITS_SPOKEN_N_NEEDED = [0, 1, 2, 3, 8, 9]
var FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED = [40, 50, 60, 70]

// Eifeler Regel
function isFinalNNeeded(nextWords) {
  var firstLetter = nextWords.charAt(0).toLowerCase()
  if (
    VOWELS.indexOf(firstLetter) != -1 ||
    EXCEPTION_CONSONANTS.indexOf(firstLetter) != -1
  ) {
    return true
  }

  // Numbers would need to converted into words for checking.
  // Therefore, I have listed the digits that require a preceeding n with a few exceptions.
  var firstWord = nextWords.split(' ')[0]
  var number = parseInt(firstWord)
  if (
    !isNaN(number) &&
    DIGITS_SPOKEN_N_NEEDED.indexOf(number % 10) != -1 &&
    FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED.indexOf(
      parseInt(firstWord.substring(0, 2))
    ) == -1
  ) {
    return true
  }

  // Omit other checks as they are not expected here.
  return false
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var usageGroup = options.addSuffix
    ? formatDistanceLocale[token].withPreposition
    : formatDistanceLocale[token].standalone

  var result
  if (typeof usageGroup === 'string') {
    result = usageGroup
  } else if (count === 1) {
    result = usageGroup.one
  } else {
    result = usageGroup.other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'a' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result
    } else {
      return 'viru' + (isFinalNNeeded(result) ? 'n' : '') + ' ' + result
    }
  }

  return result
}
