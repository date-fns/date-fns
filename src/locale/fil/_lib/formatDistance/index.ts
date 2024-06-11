import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.js";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'mas mababa sa isang segundo',
    other: 'mas mababa sa {{count}} segundo'
  },
  xSeconds: {
    one: 'isang segundo',
    other: '{{count}} segundo'
  },
  halfAMinute: 'kalahating minuto',
  lessThanXMinutes: {
    one: 'mas mababa sa isang minuto',
    other: 'mas mababa sa {{count}} minuto'
  },
  xMinutes: {
    one: 'isang minuto',
    other: '{{count}} minuto'
  },
  aboutXHours: {
    one: 'mga isang oras',
    other: 'mga {{count}} oras'
  },
  xHours: {
    one: 'isang oras',
    other: '{{count}} oras'
  },
  xDays: {
    one: 'isang araw',
    other: '{{count}} araw'
  },
  aboutXWeeks: {
    one: 'mga isang linggo',
    other: 'mga {{count}} linggo'
  },
  xWeeks: {
    one: 'isang linggo',
    other: '{{count}} linggo'
  },
  aboutXMonths: {
    one: 'mga isang buwan',
    other: 'mga {{count}} buwan'
  },
  xMonths: {
    one: 'isang buwan',
    other: '{{count}} buwan'
  },
  aboutXYears: {
    one: 'mga isang taon',
    other: 'mga {{count}} taon'
  },
  xYears: {
    one: 'isang taon',
    other: '{{count}} taon'
  },
  overXYears: {
    one: 'higit sa isang taon',
    other: 'higit sa {{count}} taon'
  },
  almostXYears: {
    one: 'halos isang taon',
    other: 'halos {{count}} taon'
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
      return "sa loob ng " + result;
    } else {
      return "nakalipas na " + result;
    }
  }

  return result;
};
