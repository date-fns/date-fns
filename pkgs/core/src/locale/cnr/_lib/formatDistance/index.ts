import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      // Used when the count ends with 1, but not with 11 (1, 21, 101, ...)
      one: {
        // Nominative: "21 sekunda"
        standalone: string;
        // Genitive after "prije": "prije 21 sekunde"
        withPrepositionAgo: string;
        // Accusative after "za": "za 21 sekundu"
        withPrepositionIn: string;
      };
      // Used when the count ends with 2-4, but not with 12-14 (2, 23, 104, ...)
      few: string;
      // Everything else (5, 11, 12, 111, ...)
      many: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: {
      standalone: "manje od {{count}} sekunde",
      withPrepositionAgo: "manje od {{count}} sekunde",
      withPrepositionIn: "manje od {{count}} sekunde",
    },
    few: "manje od {{count}} sekunde",
    many: "manje od {{count}} sekundi",
  },

  xSeconds: {
    one: {
      standalone: "{{count}} sekunda",
      withPrepositionAgo: "{{count}} sekunde",
      withPrepositionIn: "{{count}} sekundu",
    },
    few: "{{count}} sekunde",
    many: "{{count}} sekundi",
  },

  halfAMinute: "pola minuta",

  lessThanXMinutes: {
    one: {
      standalone: "manje od {{count}} minuta",
      withPrepositionAgo: "manje od {{count}} minuta",
      withPrepositionIn: "manje od {{count}} minuta",
    },
    few: "manje od {{count}} minuta",
    many: "manje od {{count}} minuta",
  },

  xMinutes: {
    one: {
      standalone: "{{count}} minut",
      withPrepositionAgo: "{{count}} minuta",
      withPrepositionIn: "{{count}} minut",
    },
    few: "{{count}} minuta",
    many: "{{count}} minuta",
  },

  aboutXHours: {
    one: {
      standalone: "oko {{count}} sat",
      withPrepositionAgo: "oko {{count}} sat",
      withPrepositionIn: "oko {{count}} sat",
    },
    few: "oko {{count}} sata",
    many: "oko {{count}} sati",
  },

  xHours: {
    one: {
      standalone: "{{count}} sat",
      withPrepositionAgo: "{{count}} sata",
      withPrepositionIn: "{{count}} sat",
    },
    few: "{{count}} sata",
    many: "{{count}} sati",
  },

  xDays: {
    one: {
      standalone: "{{count}} dan",
      withPrepositionAgo: "{{count}} dana",
      withPrepositionIn: "{{count}} dan",
    },
    few: "{{count}} dana",
    many: "{{count}} dana",
  },

  aboutXWeeks: {
    one: {
      standalone: "oko {{count}} sedmicu",
      withPrepositionAgo: "oko {{count}} sedmicu",
      withPrepositionIn: "oko {{count}} sedmicu",
    },
    few: "oko {{count}} sedmice",
    many: "oko {{count}} sedmica",
  },

  xWeeks: {
    one: {
      standalone: "{{count}} sedmica",
      withPrepositionAgo: "{{count}} sedmice",
      withPrepositionIn: "{{count}} sedmicu",
    },
    few: "{{count}} sedmice",
    many: "{{count}} sedmica",
  },

  aboutXMonths: {
    one: {
      standalone: "oko {{count}} mjesec",
      withPrepositionAgo: "oko {{count}} mjesec",
      withPrepositionIn: "oko {{count}} mjesec",
    },
    few: "oko {{count}} mjeseca",
    many: "oko {{count}} mjeseci",
  },

  xMonths: {
    one: {
      standalone: "{{count}} mjesec",
      withPrepositionAgo: "{{count}} mjeseca",
      withPrepositionIn: "{{count}} mjesec",
    },
    few: "{{count}} mjeseca",
    many: "{{count}} mjeseci",
  },

  aboutXYears: {
    one: {
      standalone: "oko {{count}} godinu",
      withPrepositionAgo: "oko {{count}} godinu",
      withPrepositionIn: "oko {{count}} godinu",
    },
    few: "oko {{count}} godine",
    many: "oko {{count}} godina",
  },

  xYears: {
    one: {
      standalone: "{{count}} godina",
      withPrepositionAgo: "{{count}} godine",
      withPrepositionIn: "{{count}} godinu",
    },
    few: "{{count}} godine",
    many: "{{count}} godina",
  },

  overXYears: {
    one: {
      standalone: "preko {{count}} godine",
      withPrepositionAgo: "preko {{count}} godine",
      withPrepositionIn: "preko {{count}} godine",
    },
    few: "preko {{count}} godine",
    many: "preko {{count}} godina",
  },

  almostXYears: {
    one: {
      standalone: "skoro {{count}} godina",
      withPrepositionAgo: "skoro {{count}} godine",
      withPrepositionIn: "skoro {{count}} godinu",
    },
    few: "skoro {{count}} godine",
    many: "skoro {{count}} godina",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (lastDigit === 1 && lastTwoDigits !== 11) {
    let form;
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        form = tokenValue.one.withPrepositionIn;
      } else {
        form = tokenValue.one.withPrepositionAgo;
      }
    } else {
      form = tokenValue.one.standalone;
    }
    result = form.replace("{{count}}", String(count));
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 12 || lastTwoDigits > 14)
  ) {
    result = tokenValue.few.replace("{{count}}", String(count));
  } else {
    result = tokenValue.many.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "za " + result;
    } else {
      return "prije " + result;
    }
  }

  return result;
};
