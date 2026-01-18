import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type Tense = {
  regular: string;
  past: string;
  future: string;
};

type FormatDistanceTokenValue = {
  one: string | Tense;
  twoFour: string;
  other: string;
};

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż 1 sekunda",
      past: "mniej niż 1 sekundę",
      future: "mniej niż 1 sekundę",
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund",
  },

  xSeconds: {
    one: {
      regular: "1 sekunda",
      past: "1 sekundę",
      future: "1 sekundę",
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund",
  },

  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty",
  },

  lessThanXMinutes: {
    one: {
      regular: "mniej niż 1 minuta",
      past: "mniej niż 1 minutę",
      future: "mniej niż 1 minutę",
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut",
  },

  xMinutes: {
    one: {
      regular: "1 minuta",
      past: "1 minutę",
      future: "1 minutę",
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut",
  },

  aboutXHours: {
    one: {
      regular: "około 1 godziny",
      past: "około 1 godziny",
      future: "około 1 godzinę",
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin",
  },

  xHours: {
    one: {
      regular: "1 godzina",
      past: "1 godzinę",
      future: "1 godzinę",
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin",
  },

  xDays: {
    one: {
      regular: "1 dzień",
      past: "1 dzień",
      future: "1 dzień",
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni",
  },

  aboutXWeeks: {
    one: "około 1 tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni",
  },

  xWeeks: {
    one: "1tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni",
  },

  aboutXMonths: {
    one: "około 1 miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy",
  },

  xMonths: {
    one: "1 miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy",
  },

  aboutXYears: {
    one: "około 1 rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat",
  },

  xYears: {
    one: "1 rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat",
  },

  overXYears: {
    one: "ponad 1 rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat",
  },

  almostXYears: {
    one: "prawie 1 rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat",
  },
};

function declensionGroup(
  scheme: FormatDistanceTokenValue,
  count: number,
): string | Tense {
  if (count === 1) {
    return scheme.one;
  }

  const rem100 = count % 100;

  // ends with 11-20
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other;
  }

  const rem10 = rem100 % 10;

  // ends with 2, 3, 4
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour;
  }

  return scheme.other;
}

function declension(
  scheme: FormatDistanceTokenValue,
  count: number,
  time: keyof Tense,
) {
  const group = declensionGroup(scheme, count);
  const finalText = typeof group === "string" ? group : group[time];
  return finalText.replace("{{count}}", String(count));
}

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const scheme = formatDistanceLocale[token];
  if (!options?.addSuffix) {
    return declension(scheme, count, "regular");
  }

  if (options.comparison && options.comparison > 0) {
    return "za " + declension(scheme, count, "future");
  } else {
    return declension(scheme, count, "past") + " temu";
  }
};
