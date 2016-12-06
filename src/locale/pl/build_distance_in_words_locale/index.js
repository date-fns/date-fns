function declensionGroup (scheme, count) {
  if (count === 1) {
    return scheme.one
  }

  var rem100 = count % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 2:
      case 3:
      case 4:
        return scheme.two_four
    }
  }

  return scheme.other
}

function declension (scheme, count, time) {
  time = time || 'regular'
  var group = declensionGroup(scheme, count)
  var finalText = group[time] || group
  return finalText.replace('{{count}}', count)
}

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: {
        regular: 'mniej niż sekunda',
        past: 'mniej niż sekundę',
        future: 'mniej niż sekundę'
      },
      two_four: 'mniej niż {{count}} sekundy',
      other: 'mniej niż {{count}} sekund'
    },

    xSeconds: {
      one: {
        regular: 'sekunda',
        past: 'sekundę',
        future: 'sekundę'
      },
      two_four: '{{count}} sekundy',
      other: '{{count}} sekund'
    },

    halfAMinute: {
      one: 'pół minuty',
      two_four: 'pół minuty',
      other: 'pół minuty'
    },

    lessThanXMinutes: {
      one: {
        regular: 'mniej niż minuta',
        past: 'mniej niż minutę',
        future: 'mniej niż minutę'
      },
      two_four: 'mniej niż {{count}} minuty',
      other: 'mniej niż {{count}} minut'
    },

    xMinutes: {
      one: {
        regular: 'minuta',
        past: 'minutę',
        future: 'minutę'
      },
      two_four: '{{count}} minuty',
      other: '{{count}} minut'
    },

    aboutXHours: {
      one: {
        regular: 'około godzina',
        past: 'około godziny',
        future: 'około godzinę'
      },
      two_four: 'około {{count}} godziny',
      other: 'około {{count}} godzin'
    },

    xHours: {
      one: {
        regular: 'godzina',
        past: 'godzinę',
        future: 'godzinę'
      },
      two_four: '{{count}} godziny',
      other: '{{count}} godzin'
    },

    xDays: {
      one: {
        regular: 'dzień',
        past: 'dzień',
        future: '1 dzień'
      },
      two_four: '{{count}} dni',
      other: '{{count}} dni'
    },

    aboutXMonths: {
      one: 'około miesiąc',
      two_four: 'około {{count}} miesiące',
      other: 'około {{count}} miesięcy'
    },

    xMonths: {
      one: 'miesiąc',
      two_four: '{{count}} miesiące',
      other: '{{count}} miesięcy'
    },

    aboutXYears: {
      one: 'około rok',
      two_four: 'około {{count}} lata',
      other: 'około {{count}} lat'
    },

    xYears: {
      one: 'rok',
      two_four: '{{count}} lata',
      other: '{{count}} lat'
    },

    overXYears: {
      one: 'ponad rok',
      two_four: 'ponad {{count}} lata',
      other: 'ponad {{count}} lat'
    },

    almostXYears: {
      one: 'prawie rok',
      two_four: 'prawie {{count}} lata',
      other: 'prawie {{count}} lat'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var scheme = distanceInWordsLocale[token]
    if (!options.addSuffix) {
      return declension(scheme, count)
    }

    if (options.comparison > 0) {
      return 'za ' + declension(scheme, count, 'future')
    } else {
      return declension(scheme, count, 'past') + ' temu'
    }
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale
