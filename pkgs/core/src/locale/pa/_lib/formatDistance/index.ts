import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

// Source: https://www.unicode.org/cldr/charts/45/summary/pa.html
// Unit nouns and the "in"/"ago" suffixes come from the CLDR relative-time
// patterns for pa (e.g. "{0} ਦਿਨ ਵਿੱਚ" / "{0} ਦਿਨ ਪਹਿਲਾਂ"). The "about",
// "less than", "over" and "almost" wrappers follow standard Punjabi usage
// and are flagged for native-speaker review.

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "1 ਸਕਿੰਟ ਤੋਂ ਘੱਟ",
    other: "{{count}} ਸਕਿੰਟਾਂ ਤੋਂ ਘੱਟ",
  },

  xSeconds: {
    one: "1 ਸਕਿੰਟ",
    other: "{{count}} ਸਕਿੰਟ",
  },

  halfAMinute: "ਅੱਧਾ ਮਿੰਟ",

  lessThanXMinutes: {
    one: "1 ਮਿੰਟ ਤੋਂ ਘੱਟ",
    other: "{{count}} ਮਿੰਟਾਂ ਤੋਂ ਘੱਟ",
  },

  xMinutes: {
    one: "1 ਮਿੰਟ",
    other: "{{count}} ਮਿੰਟ",
  },

  aboutXHours: {
    one: "ਲਗਭਗ 1 ਘੰਟਾ",
    other: "ਲਗਭਗ {{count}} ਘੰਟੇ",
  },

  xHours: {
    one: "1 ਘੰਟਾ",
    other: "{{count}} ਘੰਟੇ",
  },

  xDays: {
    one: "1 ਦਿਨ",
    other: "{{count}} ਦਿਨ",
  },

  aboutXWeeks: {
    one: "ਲਗਭਗ 1 ਹਫ਼ਤਾ",
    other: "ਲਗਭਗ {{count}} ਹਫ਼ਤੇ",
  },

  xWeeks: {
    one: "1 ਹਫ਼ਤਾ",
    other: "{{count}} ਹਫ਼ਤੇ",
  },

  aboutXMonths: {
    one: "ਲਗਭਗ 1 ਮਹੀਨਾ",
    other: "ਲਗਭਗ {{count}} ਮਹੀਨੇ",
  },

  xMonths: {
    one: "1 ਮਹੀਨਾ",
    other: "{{count}} ਮਹੀਨੇ",
  },

  aboutXYears: {
    one: "ਲਗਭਗ 1 ਸਾਲ",
    other: "ਲਗਭਗ {{count}} ਸਾਲ",
  },

  xYears: {
    one: "1 ਸਾਲ",
    other: "{{count}} ਸਾਲ",
  },

  overXYears: {
    one: "1 ਸਾਲ ਤੋਂ ਵੱਧ",
    other: "{{count}} ਸਾਲਾਂ ਤੋਂ ਵੱਧ",
  },

  almostXYears: {
    one: "ਲਗਭਗ 1 ਸਾਲ",
    other: "ਲਗਭਗ {{count}} ਸਾਲ",
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
      return result + " ਵਿੱਚ";
    } else {
      return result + " ਪਹਿਲਾਂ";
    }
  }

  return result;
};
