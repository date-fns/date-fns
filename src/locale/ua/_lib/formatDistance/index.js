function declension (scheme, count) {
  // scheme for count=1 exists
  if (scheme.one !== undefined && count === 1) {
    return scheme.one
  }

  var rem10 = count % 10
  var rem100 = count % 100

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace('{{count}}', count)

  // 2, 3, 4, 22, 23, 24, 32 ...
  } else if ((rem10 >= 2 && rem10 <= 4) && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace('{{count}}', count)

  // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace('{{count}}', count)
  }
}

function buildLocalizeTokenFn (scheme) {
  return function (count, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count)
        } else {
          return 'за ' + declension(scheme.regular, count)
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count)
        } else {
          return declension(scheme.regular, count) + ' тому'
        }
      }
    } else {
      return declension(scheme.regular, count)
    }
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: 'менше секунди',
      singularNominative: 'менше {{count}} секунди',
      singularGenitive: 'менше {{count}} секунд',
      pluralGenitive: 'менше {{count}} секунд'
    },
    future: {
      one: 'менше, ніж за секунду',
      singularNominative: 'менше, ніж за {{count}} секунду',
      singularGenitive: 'менше, ніж за {{count}} секунди',
      pluralGenitive: 'менше, ніж за {{count}} секунд'
    }
  }),

  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} секунда',
      singularGenitive: '{{count}} секунди',
      pluralGenitive: '{{count}} секунд'
    },
    past: {
      singularNominative: '{{count}} секунду тому',
      singularGenitive: '{{count}} секунди тому',
      pluralGenitive: '{{count}} секунд тому'
    },
    future: {
      singularNominative: 'за {{count}} секунду',
      singularGenitive: 'за {{count}} секунди',
      pluralGenitive: 'за {{count}} секунд'
    }
  }),

  halfAMinute: function (_, options) {
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'за півхвилини'
      } else {
        return 'півхвилини тому'
      }
    }

    return 'півхвилини'
  },

  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: 'менше хвилини',
      singularNominative: 'менше {{count}} хвилини',
      singularGenitive: 'менше {{count}} хвилин',
      pluralGenitive: 'менше {{count}} хвилин'
    },
    future: {
      one: 'менше, ніж за хвилину',
      singularNominative: 'менше, ніж за {{count}} хвилину',
      singularGenitive: 'менше, ніж за {{count}} хвилини',
      pluralGenitive: 'менше, ніж за {{count}} хвилин'
    }
  }),

  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} хвилина',
      singularGenitive: '{{count}} хвилини',
      pluralGenitive: '{{count}} хвилин'
    },
    past: {
      singularNominative: '{{count}} хвилину тому',
      singularGenitive: '{{count}} хвилини тому',
      pluralGenitive: '{{count}} хвилин тому'
    },
    future: {
      singularNominative: 'за {{count}} хвилину',
      singularGenitive: 'за {{count}} хвилини',
      pluralGenitive: 'за {{count}} хвилин'
    }
  }),

  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} години',
      singularGenitive: 'близько {{count}} годин',
      pluralGenitive: 'близько {{count}} годин'
    },
    future: {
      singularNominative: 'приблизно за {{count}} годину',
      singularGenitive: 'приблизно за {{count}} години',
      pluralGenitive: 'приблизно за {{count}} годин'
    }
  }),

  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} годину',
      singularGenitive: '{{count}} години',
      pluralGenitive: '{{count}} годин'
    }
  }),

  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} день',
      singularGenitive: '{{count}} дня',
      pluralGenitive: '{{count}} днів'
    }
  }),

  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} місяця',
      singularGenitive: 'близько {{count}} місяців',
      pluralGenitive: 'близько {{count}} місяців'
    },
    future: {
      singularNominative: 'приблизно за {{count}} місяць',
      singularGenitive: 'приблизно за {{count}} місяця',
      pluralGenitive: 'приблизно за {{count}} місяців'
    }
  }),

  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} місяць',
      singularGenitive: '{{count}} місяця',
      pluralGenitive: '{{count}} місяців'
    }
  }),

  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'близько {{count}} року',
      singularGenitive: 'близько {{count}} років',
      pluralGenitive: 'близько {{count}} років'
    },
    future: {
      singularNominative: 'приблизно за {{count}} рік',
      singularGenitive: 'приблизно за {{count}} роки',
      pluralGenitive: 'приблизно за {{count}} років'
    }
  }),

  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: '{{count}} рік',
      singularGenitive: '{{count}} роки',
      pluralGenitive: '{{count}} років'
    }
  }),

  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'більше {{count}} року',
      singularGenitive: 'більше {{count}} років',
      pluralGenitive: 'більше {{count}} років'
    },
    future: {
      singularNominative: 'більше, ніж за {{count}} рік',
      singularGenitive: 'більше, ніж за {{count}} роки',
      pluralGenitive: 'більше, ніж за {{count}} років'
    }
  }),

  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: 'почти {{count}} рік',
      singularGenitive: 'почти {{count}} роки',
      pluralGenitive: 'почти {{count}} років'
    },
    future: {
      singularNominative: 'почти за {{count}} рік',
      singularGenitive: 'почти за {{count}} роки',
      pluralGenitive: 'почти за {{count}} років'
    }
  })
}

export default function formatDistance (token, count, options) {
  options = options || {}
  return formatDistanceLocale[token](count, options)
}
