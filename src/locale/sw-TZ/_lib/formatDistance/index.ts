import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "chini ya sekunde 1",
    other: "chini ya sekunde {{count}}",
  },
  xSeconds: {
    one: "sekunde 1",
    other: "sekunde {{count}}",
  },
  halfAMinute: "nusu dakika",
  lessThanXMinutes: {
    one: "chini ya dakika 1",
    other: "chini ya dakika {{count}}",
  },
  xMinutes: {
    one: "dakika 1",
    other: "dakika {{count}}",
  },
  aboutXHours: {
    one: "karibu saa 1",
    other: "karibu saa {{count}}",
  },
  xHours: {
    one: "saa 1",
    other: "saa {{count}}",
  },
  xDays: {
    one: "siku 1",
    other: "siku {{count}}",
  },
  aboutXWeeks: {
    one: "karibu wiki 1",
    other: "karibu wiki {{count}}",
  },
  xWeeks: {
    one: "wiki 1",
    other: "wiki {{count}}",
  },
  aboutXMonths: {
    one: "karibu mwezi 1",
    other: "karibu miezi {{count}}",
  },
  xMonths: {
    one: "mwezi 1",
    other: "miezi {{count}}",
  },
  aboutXYears: {
    one: "karibu mwaka 1",
    other: "karibu miaka {{count}}",
  },
  xYears: {
    one: "mwaka 1",
    other: "miaka {{count}}",
  },
  overXYears: {
    one: "zaidi ya mwaka 1",
    other: "zaidi ya miaka {{count}}",
  },
  almostXYears: {
    one: "karibu mwaka 1",
    other: "karibu miaka {{count}}",
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
      return "baada ya " + result;
    } else {
      return " tangu " + result;
    }
  }

  return result;
};
