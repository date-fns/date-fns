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
      one: "аз як сония камтар",
      singularNominative: "аз {{count}} сония камтар",
      singularGenitive: "аз {{count}} сония камтар",
      pluralGenitive: "аз {{count}} сония камтар",
    },
    future: {
      one: "камтар аз як сония",
      singularNominative: "камтар аз {{count}} сония",
      singularGenitive: "камтар аз {{count}} сония",
      pluralGenitive: "камтар аз {{count}} сония",
    },
  },

  xSeconds: {
    regular: {
      singularNominative: "{{count}} сония",
      singularGenitive: "{{count}} сония",
      pluralGenitive: "{{count}} сония",
    },
    past: {
      singularNominative: "{{count}} сония пеш",
      singularGenitive: "{{count}} сония пеш",
      pluralGenitive: "{{count}} сония пеш",
    },
    future: {
      singularNominative: "баъд аз {{count}} сония",
      singularGenitive: "баъд аз {{count}} сония",
      pluralGenitive: "баъд аз {{count}} сония",
    },
  },

  halfAMinute: (options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "баъд аз ним дақиқа";
      } else {
        return "ним дақиқа пеш";
      }
    }

    return "ним дақиқа";
  },

  lessThanXMinutes: {
    regular: {
      one: "камтар аз як дақиқа",
      singularNominative: "камтар аз {{count}} дақиқа",
      singularGenitive: "камтар аз {{count}} дақиқа",
      pluralGenitive: "камтар аз {{count}} дақиқа",
    },
    future: {
      one: "камтар аз як дақиқа",
      singularNominative: "камтар аз {count}} дақиқа",
      singularGenitive: "камтар аз {count}} дақиқа",
      pluralGenitive: "камтар аз {count}} дақиқа",
    },
  },

  xMinutes: {
    regular: {
      singularNominative: "{{count}} дақиқа",
      singularGenitive: "{{count}} дақиқа",
      pluralGenitive: "{{count}} дақиқа",
    },
    past: {
      singularNominative: "{{count}} дақиқа пеш",
      singularGenitive: "{{count}} дақиқа пеш",
      pluralGenitive: "{{count}} дақиқа пеш",
    },
    future: {
      singularNominative: "баъд аз {{count}} дақиқа",
      singularGenitive: "баъд аз {{count}} дақиқа",
      pluralGenitive: "баъд аз {{count}} дақиқа",
    },
  },

  aboutXHours: {
    regular: {
      singularNominative: "қариб {{count}} соат",
      singularGenitive: "қариб {{count}} соат",
      pluralGenitive: "қариб {{count}} соат",
    },
    future: {
      singularNominative: "тақрибан баъд аз {{count}} соат",
      singularGenitive: "тақрибан баъд аз {{count}} соат",
      pluralGenitive: "тақрибан баъд аз {{count}} соат",
    },
  },

  xHours: {
    regular: {
      singularNominative: "{{count}} соат",
      singularGenitive: "{{count}} соат",
      pluralGenitive: "{{count}} соат",
    },
    future: {
      singularNominative: "баъд аз {{count}} соат",
      singularGenitive: "баъд аз {{count}} соат",
      pluralGenitive: "баъд аз {{count}} соат",
    },
  },

  xDays: {
    regular: {
      singularNominative: "{{count}} рӯз",
      singularGenitive: "{{count}} рӯз",
      pluralGenitive: "{{count}} рӯз",
    },
    future: {
      singularNominative: "баъд аз {{count}} рӯз",
      singularGenitive: "баъд аз {{count}} рӯз",
      pluralGenitive: "баъд аз {{count}} рӯз",
    },
  },

  aboutXWeeks: {
    regular: {
      singularNominative: "қариб {{count}} ҳафта",
      singularGenitive: "қариб {{count}} ҳафта",
      pluralGenitive: "қариб {{count}} ҳафта",
    },
    future: {
      singularNominative: "тақрибан баъд аз {{count}} ҳафта",
      singularGenitive: "тақрибан баъд аз {{count}} ҳафта",
      pluralGenitive: "тақрибан баъд аз {{count}} ҳафта",
    },
  },

  xWeeks: {
    regular: {
      singularNominative: "{{count}} ҳафта",
      singularGenitive: "{{count}} ҳафта",
      pluralGenitive: "{{count}} ҳафта",
    },
    future: {
      singularNominative: "баъд аз {{count}} ҳафта",
      singularGenitive: "баъд аз {{count}} ҳафта",
      pluralGenitive: "баъд аз {{count}} ҳафта",
    },
  },

  aboutXMonths: {
    regular: {
      singularNominative: "қариб {{count}} моҳ",
      singularGenitive: "қариб {{count}} моҳ",
      pluralGenitive: "қариб {{count}} моҳ",
    },
    future: {
      singularNominative: "тақрибан баъд аз {{count}} моҳ",
      singularGenitive: "тақрибан баъд аз {{count}} моҳ",
      pluralGenitive: "тақрибан баъд аз {{count}} моҳ",
    },
  },

  xMonths: {
    regular: {
      singularNominative: "{{count}} моҳ",
      singularGenitive: "{{count}} моҳ",
      pluralGenitive: "{{count}} моҳ",
    },
    future: {
      singularNominative: "баъд аз {{count}} моҳ",
      singularGenitive: "баъд аз {{count}} моҳ",
      pluralGenitive: "баъд аз {{count}} моҳ",
    },
  },

  aboutXYears: {
    regular: {
      singularNominative: "тақрибан {{count}} сол",
      singularGenitive: "тақрибан {{count}} сол",
      pluralGenitive: "тақрибан {{count}} сол",
    },
    future: {
      singularNominative: "тақрибан баъд аз {{count}} сол",
      singularGenitive: "тақрибан баъд аз {{count}} сол",
      pluralGenitive: "тақрибан баъд аз {{count}} сол",
    },
  },

  xYears: {
    regular: {
      singularNominative: "{{count}} сол",
      singularGenitive: "{{count}} сол",
      pluralGenitive: "{{count}} сол",
    },
    future: {
      singularNominative: "баъд аз {{count}} сол",
      singularGenitive: "баъд аз {{count}} сол",
      pluralGenitive: "баъд аз {{count}} сол",
    },
  },

  overXYears: {
    regular: {
      singularNominative: "зиёда аз {{count}} сол",
      singularGenitive: "зиёда аз {{count}} сол",
      pluralGenitive: "зиёда аз {{count}} сол",
    },
    future: {
      singularNominative: "зиёда аз {{count}} сол",
      singularGenitive: "зиёда аз {{count}} сол",
      pluralGenitive: "зиёда аз {{count}} сол",
    },
  },

  almostXYears: {
    regular: {
      singularNominative: "қариб {{count}} сол",
      singularGenitive: "қариб {{count}} сол",
      pluralGenitive: "қариб {{count}} сол",
    },
    future: {
      singularNominative: "тақрибан баъд аз {{count}} сол",
      singularGenitive: "тақрибан баъд аз {{count}} сол",
      pluralGenitive: "тақрибан баъд аз {{count}} сол",
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
        return declension(tokenValue.regular, count) + " дар оянда";
      }
    } else {
      if (tokenValue.past) {
        return declension(tokenValue.past, count);
      } else {
        return declension(tokenValue.regular, count) + " пеш";
      }
    }
  } else {
    return declension(tokenValue.regular, count);
  }
};
