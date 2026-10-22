import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "latsaky ny 1 segondra",
    other: "latsaky ny {{count}} segondra",
  },

  xSeconds: {
    one: "1 segondra",
    other: "{{count}} segondra",
  },

  halfAMinute: "antsasaky ny minitra",

  lessThanXMinutes: {
    one: "latsaky ny 1 minitra",
    other: "latsaky ny {{count}} minitra",
  },

  xMinutes: {
    one: "1 minitra",
    other: "{{count}} minitra",
  },

  aboutXHours: {
    one: "tokony ho 1 ora",
    other: "tokony ho {{count}} ora",
  },

  xHours: {
    one: "1 ora",
    other: "{{count}} ora",
  },

  xDays: {
    one: "1 andro",
    other: "{{count}} andro",
  },

  aboutXWeeks: {
    one: "tokony ho 1 herinandro",
    other: "tokony ho {{count}} herinandro",
  },

  xWeeks: {
    one: "1 herinandro",
    other: "{{count}} herinandro",
  },

  aboutXMonths: {
    one: "tokony ho 1 volana",
    other: "tokony ho {{count}} volana",
  },

  xMonths: {
    one: "1 volana",
    other: "{{count}} volana",
  },

  aboutXYears: {
    one: "tokony ho 1 taona",
    other: "tokony ho {{count}} taona",
  },

  xYears: {
    one: "1 taona",
    other: "{{count}} taona",
  },

  overXYears: {
    one: "mihoatra ny 1 taona",
    other: "mihoatra ny {{count}} taona",
  },

  almostXYears: {
    one: "saika 1 taona",
    other: "saika {{count}} taona",
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
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "afaka " + result;
    } else {
      return result + " lasa izay";
    }
  }

  return result;
};
