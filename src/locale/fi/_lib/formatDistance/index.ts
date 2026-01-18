import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue = {
  one: string;
  other: string;
  futureTense: (text: string) => string;
};

function futureSeconds(text: string): string {
  return text.replace(/sekuntia?/, "sekunnin");
}

function futureMinutes(text: string): string {
  return text.replace(/minuuttia?/, "minuutin");
}

function futureHours(text: string): string {
  return text.replace(/tuntia?/, "tunnin");
}

function futureDays(text: string): string {
  return text.replace(/päivää?/, "päivän");
}

function futureWeeks(text: string): string {
  return text.replace(/(viikko|viikkoa)/, "viikon");
}

function futureMonths(text: string): string {
  return text.replace(/(kuukausi|kuukautta)/, "kuukauden");
}

function futureYears(text: string): string {
  return text.replace(/(vuosi|vuotta)/, "vuoden");
}

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "alle 1 sekunti",
    other: "alle {{count}} sekuntia",
    futureTense: futureSeconds,
  },

  xSeconds: {
    one: "1 sekunti",
    other: "{{count}} sekuntia",
    futureTense: futureSeconds,
  },

  halfAMinute: {
    one: "puoli minuuttia",
    other: "puoli minuuttia",
    futureTense: (_text) => "puolen minuutin",
  },

  lessThanXMinutes: {
    one: "alle 1 minuutti",
    other: "alle {{count}} minuuttia",
    futureTense: futureMinutes,
  },

  xMinutes: {
    one: "1 minuutti",
    other: "{{count}} minuuttia",
    futureTense: futureMinutes,
  },

  aboutXHours: {
    one: "noin 1 tunti",
    other: "noin {{count}} tuntia",
    futureTense: futureHours,
  },

  xHours: {
    one: "1 tunti",
    other: "{{count}} tuntia",
    futureTense: futureHours,
  },

  xDays: {
    one: "1 päivä",
    other: "{{count}} päivää",
    futureTense: futureDays,
  },

  aboutXWeeks: {
    one: "noin 1 viikko",
    other: "noin {{count}} viikkoa",
    futureTense: futureWeeks,
  },

  xWeeks: {
    one: "1 viikko",
    other: "{{count}} viikkoa",
    futureTense: futureWeeks,
  },

  aboutXMonths: {
    one: "noin 1 kuukausi",
    other: "noin {{count}} kuukautta",
    futureTense: futureMonths,
  },

  xMonths: {
    one: "1 kuukausi",
    other: "{{count}} kuukautta",
    futureTense: futureMonths,
  },

  aboutXYears: {
    one: "noin 1 vuosi",
    other: "noin {{count}} vuotta",
    futureTense: futureYears,
  },

  xYears: {
    one: "1 vuosi",
    other: "{{count}} vuotta",
    futureTense: futureYears,
  },

  overXYears: {
    one: "yli 1 vuosi",
    other: "yli {{count}} vuotta",
    futureTense: futureYears,
  },

  almostXYears: {
    one: "lähes 1 vuosi",
    other: "lähes {{count}} vuotta",
    futureTense: futureYears,
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const tokenValue = formatDistanceLocale[token];
  const result =
    count === 1
      ? tokenValue.one
      : tokenValue.other.replace("{{count}}", String(count));

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return tokenValue.futureTense(result) + " kuluttua";
    } else {
      return result + " sitten";
    }
  }

  return result;
};
