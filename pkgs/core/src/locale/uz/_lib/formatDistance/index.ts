import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "sekunddan kam",
    other: "{{count}} sekunddan kam",
  },

  xSeconds: {
    one: "1 sekund",
    other: "{{count}} sekund",
  },

  halfAMinute: "yarim minut",

  lessThanXMinutes: {
    one: "bir minutdan kam",
    other: "{{count}} minutdan kam",
  },

  xMinutes: {
    one: "1 minut",
    other: "{{count}} minut",
  },

  aboutXHours: {
    one: "taxminan 1 soat",
    other: "taxminan {{count}} soat",
  },

  xHours: {
    one: "1 soat",
    other: "{{count}} soat",
  },

  xDays: {
    one: "1 kun",
    other: "{{count}} kun",
  },

  aboutXWeeks: {
    one: "taxminan 1 hafta",
    other: "taxminan {{count}} hafta",
  },

  xWeeks: {
    one: "1 hafta",
    other: "{{count}} hafta",
  },

  aboutXMonths: {
    one: "taxminan 1 oy",
    other: "taxminan {{count}} oy",
  },

  xMonths: {
    one: "1 oy",
    other: "{{count}} oy",
  },

  aboutXYears: {
    one: "taxminan 1 yil",
    other: "taxminan {{count}} yil",
  },

  xYears: {
    one: "1 yil",
    other: "{{count}} yil",
  },

  overXYears: {
    one: "1 yildan ko'p",
    other: "{{count}} yildan ko'p",
  },

  almostXYears: {
    one: "deyarli 1 yil",
    other: "deyarli {{count}} yil",
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
      return result + "dan keyin";
    } else {
      return result + " oldin";
    }
  }

  return result;
};
