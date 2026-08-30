import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenForm = { one: string; other: string } | string;

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenForm> = {
  lessThanXSeconds: {
    one: "latsakin'ny 1 segondra",
    other: "latsakin'ny {{count}} segondra",
  },

  xSeconds: {
    one: "1 segondra",
    other: "{{count}} segondra",
  },

  halfAMinute: "30 segondra",

  lessThanXMinutes: {
    one: "latsakin'ny iray minitra",
    other: "latsakin'ny {{count}} minitra",
  },

  xMinutes: {
    one: "1 minitra",
    other: "{{count}} minitra",
  },

  aboutXHours: {
    one: "adiny iray eo ho eo",
    other: "adiny {{count}} eo ho eo",
  },

  xHours: {
    one: "adiny iray",
    other: "adiny {{count}}",
  },

  xDays: {
    one: "1 andro",
    other: "{{count}} andro",
  },

  aboutXWeeks: {
    one: "herinandro eo ho eo",
    other: "{{count}} herin'andro eo ho eo",
  },

  xWeeks: {
    one: "1 herin'andro",
    other: "{{count}} herin'andro",
  },

  aboutXMonths: {
    one: "1 volana eo ho eo",
    other: "{{count}} volana eo ho eo",
  },

  xMonths: {
    one: "1 volana",
    other: "{{count}} volana",
  },

  aboutXYears: {
    one: "heritaona eo ho eo",
    other: "{{count}} taona eo ho eo",
  },

  xYears: {
    one: "1 taona",
    other: "{{count}} taona",
  },

  overXYears: {
    one: "heritaona mahery",
    other: "maherin'ny {{count}} taona",
  },

  almostXYears: {
    one: "madiva ho heritaona",
    other: "madiva ho {{count}} taona",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;
  const form = formatDistanceLocale[token];
  if (typeof form === "string") {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "afaka " + result;
    } else {
      return "tamin'ny " + result;
    }
  }

  return result;
};
