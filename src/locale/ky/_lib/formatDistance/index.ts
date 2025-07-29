import type {
  FormatDistanceFn,
  FormatDistanceLocale,
  FormatDistanceFnOptions,
} from "../../../types.js";

type Plural = {
  one?: string;
  singularNominative: string;
  singularGenitive: string;
  pluralGenitive: string;
};

type FormatDistanceTokenValue =
  | {
      type?: undefined;
      regular: Plural;
      past?: Plural;
      future?: Plural;
    }
  | ((options?: FormatDistanceFnOptions) => string);

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    regular: {
      one: "1 секундтан аз",
      singularNominative: "{{count}} секундтан аз",
      singularGenitive: "{{count}} секундтан аз",
      pluralGenitive: "{{count}} секундтан аз",
    },
    future: {
      one: "бир секундтан азыраак убакытта",
      singularNominative: "{{count}} секундтан азыраак убакытта",
      singularGenitive: "{{count}} секундтан азыраак убакытта",
      pluralGenitive: "{{count}} секундтан азыраак убакытта",
    },
  },

  xSeconds: {
    regular: {
      singularNominative: "{{count}} секунд",
      singularGenitive: "{{count}} секунд",
      pluralGenitive: "{{count}} секунд",
    },
    past: {
      singularNominative: "{{count}} секунд мурун",
      singularGenitive: "{{count}} секунд мурун",
      pluralGenitive: "{{count}} секунд мурун",
    },
    future: {
      singularNominative: "{{count}} секундтан кийин",
      singularGenitive: "{{count}} секундтан кийин",
      pluralGenitive: "{{count}} секундтан кийин",
    },
  },

  halfAMinute: (options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "жарым мүнөттөн кийин";
      } else {
        return "жарым мүнөттөн мурун";
      }
    }

    return "жарым мүнөт";
  },

  lessThanXMinutes: {
    regular: {
      one: "бир мүнөттөн аз",
      singularNominative: "{{count}} мүнөттөн аз",
      singularGenitive: "{{count}} мүнөттөн аз",
      pluralGenitive: "{{count}} мүнөттөн аз",
    },
    future: {
      one: "бир мүнөттөн аз убакытта",
      singularNominative: "{{count}} мүнөттөн аз убакытта",
      singularGenitive: "{{count}} мүнөттөн аз убакытта",
      pluralGenitive: "{{count}} мүнөттөн аз убакытта",
    },
  },

  xMinutes: {
    regular: {
      singularNominative: "{{count}} мүнөт",
      singularGenitive: "{{count}} мүнөт",
      pluralGenitive: "{{count}} мүнөт",
    },
    past: {
      singularNominative: "{{count}} мүнөт мурун",
      singularGenitive: "{{count}} мүнөт мурун",
      pluralGenitive: "{{count}} мүнөт мурун",
    },
    future: {
      singularNominative: "{{count}} мүнөттөн кийин",
      singularGenitive: "{{count}} мүнөттөн кийин",
      pluralGenitive: "{{count}} мүнөттөн кийин",
    },
  },

  aboutXHours: {
    regular: {
      singularNominative: "болжол менен {{count}} саат",
      singularGenitive: "болжол менен {{count}} саат",
      pluralGenitive: "болжол менен {{count}} саат",
    },
    future: {
      singularNominative: "болжол менен {{count}} сааттан кийин",
      singularGenitive: "болжол менен {{count}} сааттан кийин",
      pluralGenitive: "болжол менен {{count}} сааттан кийин",
    },
  },

  xHours: {
    regular: {
      singularNominative: "{{count}} саат",
      singularGenitive: "{{count}} саат",
      pluralGenitive: "{{count}} саат",
    },
    future: {
      singularNominative: "{{count}} сааттан кийин",
      singularGenitive: "{{count}} сааттан кийин",
      pluralGenitive: "{{count}} сааттан кийин",
    },
  },

  xDays: {
    regular: {
      singularNominative: "{{count}} күн",
      singularGenitive: "{{count}} күн",
      pluralGenitive: "{{count}} күн",
    },
    future: {
      singularNominative: "{{count}} күндөн кийин",
      singularGenitive: "{{count}} күндөн кийин",
      pluralGenitive: "{{count}} күндөн кийин",
    },
  },

  aboutXWeeks: {
    regular: {
      singularNominative: "болжол менен {{count}} жума",
      singularGenitive: "болжол менен {{count}} жума",
      pluralGenitive: "болжол менен {{count}} жума",
    },
    future: {
      singularNominative: "болжол менен {{count}} жумадан кийин",
      singularGenitive: "болжол менен {{count}} жумадан кийин",
      pluralGenitive: "болжол менен {{count}} жумадан кийин",
    },
  },

  xWeeks: {
    regular: {
      singularNominative: "{{count}} жума",
      singularGenitive: "{{count}} жума",
      pluralGenitive: "{{count}} жума",
    },
    future: {
      singularNominative: "{{count}} жумадан кийин",
      singularGenitive: "{{count}} жумадан кийин",
      pluralGenitive: "{{count}} жумадан кийин",
    },
  },

  aboutXMonths: {
    regular: {
      singularNominative: "болжол менен {{count}} ай",
      singularGenitive: "болжол менен {{count}} ай",
      pluralGenitive: "болжол менен {{count}} ай",
    },
    future: {
      singularNominative: "болжол менен {{count}} айдан кийин",
      singularGenitive: "болжол менен {{count}} айдан кийин",
      pluralGenitive: "болжол менен {{count}} айдан кийин",
    },
  },

  xMonths: {
    regular: {
      singularNominative: "{{count}} ай",
      singularGenitive: "{{count}} ай",
      pluralGenitive: "{{count}} ай",
    },
    future: {
      singularNominative: "{{count}} айдан кийин",
      singularGenitive: "{{count}} айдан кийин",
      pluralGenitive: "{{count}} айдан кийин",
    },
  },

  aboutXYears: {
    regular: {
      singularNominative: "болжол менен {{count}} жыл",
      singularGenitive: "болжол менен {{count}} жыл",
      pluralGenitive: "болжол менен {{count}} жыл",
    },
    future: {
      singularNominative: "болжол менен {{count}} жылдан кийин",
      singularGenitive: "болжол менен {{count}} жылдан кийин",
      pluralGenitive: "болжол менен {{count}} жылдан кийин",
    },
  },

  xYears: {
    regular: {
      singularNominative: "{{count}} жыл",
      singularGenitive: "{{count}} жыл",
      pluralGenitive: "{{count}} жыл",
    },
    future: {
      singularNominative: "{{count}} жылдан кийин",
      singularGenitive: "{{count}} жылдан кийин",
      pluralGenitive: "{{count}} жылдан кийин",
    },
  },

  overXYears: {
    regular: {
      singularNominative: "{{count}} жылдан ашык",
      singularGenitive: "{{count}} жылдан ашык",
      pluralGenitive: "{{count}} жылдан ашык",
    },
    future: {
      singularNominative: "{{count}} жылдан ашык убакыттан кийин",
      singularGenitive: "{{count}} жылдан ашык убакыттан кийин",
      pluralGenitive: "{{count}} жылдан ашык убакыттан кийин",
    },
  },

  almostXYears: {
    regular: {
      singularNominative: "{{count}} жылга жакын",
      singularGenitive: "{{count}} жылга жакын",
      pluralGenitive: "{{count}} жылга жакын",
    },
    future: {
      singularNominative: "{{count}} жылга жакын убакыттан кийин",
      singularGenitive: "{{count}} жылга жакын убакыттан кийин",
      pluralGenitive: "{{count}} жылга жакын убакыттан кийин",
    },
  },
};

function declension(scheme: Plural, count: number): string {
  // scheme for count=1 exists
  if (scheme.one && count === 1) return scheme.one;

  const rem10 = count % 10;
  const rem100 = count % 100;

  // 1, 21, 31, ...
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace("{{count}}", String(count));

    // 2, 3, 4, 22, 23, 24, 32 ...
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace("{{count}}", String(count));

    // 5, 6, 7, 8, 9, 10, 11, ...
  } else {
    return scheme.pluralGenitive.replace("{{count}}", String(count));
  }
}

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === "function") return tokenValue(options);

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (tokenValue.future) {
        return declension(tokenValue.future, count);
      } else {
        return declension(tokenValue.regular, count) + " кийин";
      }
    } else {
      if (tokenValue.past) {
        return declension(tokenValue.past, count);
      } else {
        return declension(tokenValue.regular, count) + " мурун";
      }
    }
  } else {
    return declension(tokenValue.regular, count);
  }
};
