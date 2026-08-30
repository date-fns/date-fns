import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {

    other: "minus kane {{count}} sho",
  },

  xSeconds: {
    other: "{{count}} sho",
  },

  halfAMinute: "han fun",

  lessThanXMinutes: {
    other: "minus kane {{count}} fun",
  },

  xMinutes: {
    other: "{{count}} fun",
  },

  aboutXHours: {
    other: "akote {{count}} zhikan",
  },

  xHours: {
    other: "{{count}} zhikan",
  },

  xDays: {
    other: "{{count}} dag",
  },

  aboutXWeeks: {
    other: "akote {{count}} uk",
  },

  xWeeks: {
    other: "{{count}} uk",
  },

  aboutXMonths: {
    other: "akote {{count}} muaj",
  },

  xMonths: {
    other: "{{count}} muaj",
  },

  aboutXYears: {
    other: "akote {{count}} toshi",
  },

  xYears: {
    other: "{{count}} toshi",
  },

  overXYears: {
    other: "plus kane {{count}} toshi",
  },

  almostXYears: {
    other: "akote {{count}} toshi",
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " miraj";
    } else {
      return result + " dan";
    }
  }

  return result;
};
