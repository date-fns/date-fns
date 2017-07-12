var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: 'weniger als eine Sekunde',
      other: 'weniger als {{count}} Sekunden'
    },
    withPreposition: {
      one: 'weniger als einer Sekunde',
      other: 'weniger als {{count}} Sekunden'
    }
  },

  xSeconds: {
    standalone: {
      one: 'eine Sekunde',
      other: '{{count}} Sekunden'
    },
    withPreposition: {
      one: 'einer Sekunde',
      other: '{{count}} Sekunden'
    }
  },

  halfAMinute: {
    standalone: 'eine halbe Minute',
    withPreposition: 'einer halben Minute'
  },

  lessThanXMinutes: {
    standalone: {
      one: 'weniger als eine Minute',
      other: 'weniger als {{count}} Minuten'
    },
    withPreposition: {
      one: 'weniger als einer Minute',
      other: 'weniger als {{count}} Minuten'
    }
  },

  xMinutes: {
    standalone: {
      one: 'eine Minute',
      other: '{{count}} Minuten'
    },
    withPreposition: {
      one: 'einer Minute',
      other: '{{count}} Minuten'
    }
  },

  aboutXHours: {
    standalone: {
      one: 'etwa eine Stunde',
      other: 'etwa {{count}} Stunden'
    },
    withPreposition: {
      one: 'etwa einer Stunde',
      other: 'etwa {{count}} Stunden'
    }
  },

  xHours: {
    standalone: {
      one: 'eine Stunde',
      other: '{{count}} Stunden'
    },
    withPreposition: {
      one: 'einer Stunde',
      other: '{{count}} Stunden'
    }
  },

  xDays: {
    standalone: {
      one: 'ein Tag',
      other: '{{count}} Tage'
    },
    withPreposition: {
      one: 'einem Tag',
      other: '{{count}} Tagen'
    }

  },

  aboutXMonths: {
    standalone: {
      one: 'etwa ein Monat',
      other: 'etwa {{count}} Monate'
    },
    withPreposition: {
      one: 'etwa einem Monat',
      other: 'etwa {{count}} Monaten'
    }
  },

  xMonths: {
    standalone: {
      one: 'ein Monat',
      other: '{{count}} Monate'
    },
    withPreposition: {
      one: 'einem Monat',
      other: '{{count}} Monaten'
    }
  },

  aboutXYears: {
    standalone: {
      one: 'etwa ein Jahr',
      other: 'etwa {{count}} Jahre'
    },
    withPreposition: {
      one: 'etwa einem Jahr',
      other: 'etwa {{count}} Jahren'
    }
  },

  xYears: {
    standalone: {
      one: 'ein Jahr',
      other: '{{count}} Jahre'
    },
    withPreposition: {
      one: 'einem Jahr',
      other: '{{count}} Jahren'
    }
  },

  overXYears: {
    standalone: {
      one: 'mehr als ein Jahr',
      other: 'mehr als {{count}} Jahre'
    },
    withPreposition: {
      one: 'mehr als einem Jahr',
      other: 'mehr als {{count}} Jahren'
    }
  },

  almostXYears: {
    standalone: {
      one: 'fast ein Jahr',
      other: 'fast {{count}} Jahre'
    },
    withPreposition: {
      one: 'fast einem Jahr',
      other: 'fast {{count}} Jahren'
    }
  }
}

export default function formatDistance (token, count, options) {
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
      return 'in ' + result
    } else {
      return 'vor ' + result
    }
  }

  return result
}
