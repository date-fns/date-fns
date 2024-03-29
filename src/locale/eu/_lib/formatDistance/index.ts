import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "segundo bat baino gutxiago",
    other: "{{count}} segundo baino gutxiago",
  },

  xSeconds: {
    one: "segundo bat",
    other: "{{count}} segundo",
  },

  halfAMinute: "minutu erdi",

  lessThanXMinutes: {
    one: "minutu bat baino gutxiago",
    other: "{{count}} minutu baino gutxiago",
  },

  xMinutes: {
    one: "minutu bat",
    other: "{{count}} minutu",
  },

  aboutXHours: {
    one: "ordu bat gutxi gorabehera",
    other: "{{count}} ordu gutxi gorabehera",
  },

  xHours: {
    one: "ordu bat",
    other: "{{count}} ordu",
  },

  xDays: {
    one: "egun bat",
    other: "{{count}} egun",
  },

  aboutXWeeks: {
    one: "aste 1 inguru",
    other: "{{count}} aste inguru",
  },

  xWeeks: {
    one: "aste bat",
    other: "{{count}} astean",
  },

  aboutXMonths: {
    one: "hilabete bat gutxi gorabehera",
    other: "{{count}} hilabete gutxi gorabehera",
  },

  xMonths: {
    one: "hilabete bat",
    other: "{{count}} hilabete",
  },

  aboutXYears: {
    one: "urte bat gutxi gorabehera",
    other: "{{count}} urte gutxi gorabehera",
  },

  xYears: {
    one: "urte bat",
    other: "{{count}} urte",
  },

  overXYears: {
    one: "urte bat baino gehiago",
    other: "{{count}} urte baino gehiago",
  },

  almostXYears: {
    one: "ia urte bat",
    other: "ia {{count}} urte",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " barru";
    } else {
      return "duela " + result;
    }
  }

  return result;
};
