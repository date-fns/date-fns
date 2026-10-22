import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "latsaky ny iray segondra",
    other: "latsaky ny {{count}} segondra",
  },

  xSeconds: {
    one: "1 segondra",
    other: "{{count}} segondra",
  },

  halfAMinute: "antsasaky ny minitra",

  lessThanXMinutes: {
    one: "latsaky ny iray minitra",
    other: "latsaky ny {{count}} minitra",
  },

  xMinutes: {
    one: "1 minitra",
    other: "{{count}} minitra",
  },

  aboutXHours: {
    one: "eo ho eo amin'ny 1 ora",
    other: "eo ho eo amin'ny {{count}} ora",
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
    one: "eo ho eo amin'ny 1 herinandro",
    other: "eo ho eo amin'ny {{count}} herinandro",
  },

  xWeeks: {
    one: "1 herinandro",
    other: "{{count}} herinandro",
  },

  aboutXMonths: {
    one: "eo ho eo amin'ny 1 volana",
    other: "eo ho eo amin'ny {{count}} volana",
  },

  xMonths: {
    one: "1 volana",
    other: "{{count}} volana",
  },

  aboutXYears: {
    one: "eo ho eo amin'ny 1 taona",
    other: "eo ho eo amin'ny {{count}} taona",
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
  const tokenValue = formatDistanceLocale[token];

  let result;

  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "ao anatin'ny " + result;
    } else {
      return result + " lasa izay";
    }
  }

  return result;
};
