import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type PluralKey = "one" | "two" | "few" | "many" | "other";

type FormatDistanceTokenValue = string | Record<PluralKey, string>;

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "dindan {{count}} eilenn",
    two: "dindan {{count}} eilenn",
    few: "dindan {{count}} eilenn",
    many: "dindan {{count}} a eilennoù",
    other: "dindan {{count}} eilenn",
  },

  xSeconds: {
    one: "{{count}} eilenn",
    two: "{{count}} eilenn",
    few: "{{count}} eilenn",
    many: "{{count}} a eilennoù",
    other: "{{count}} eilenn",
  },

  halfAMinute: "hanter munut",

  lessThanXMinutes: {
    one: "dindan {{count}} munut",
    two: "dindan {{count}} vunut",
    few: "dindan {{count}} munut",
    many: "dindan {{count}} a vunutoù",
    other: "dindan {{count}} munut",
  },

  xMinutes: {
    one: "{{count}} munut",
    two: "{{count}} vunut",
    few: "{{count}} munut",
    many: "{{count}} a vunutoù",
    other: "{{count}} munut",
  },

  aboutXHours: {
    one: "war-dro {{count}} eur",
    two: "war-dro {{count}} eur",
    few: "war-dro {{count}} eur",
    many: "war-dro {{count}} a eurioù",
    other: "war-dro {{count}} eur",
  },

  xHours: {
    one: "{{count}} eur",
    two: "{{count}} eur",
    few: "{{count}} eur",
    many: "{{count}} a eurioù",
    other: "{{count}} eur",
  },

  xDays: {
    one: "{{count}} deiz",
    two: "{{count}} zeiz",
    few: "{{count}} deiz",
    many: "{{count}} a zeizioù",
    other: "{{count}} deiz",
  },

  aboutXWeeks: {
    one: "war-dro {{count}} sizhun",
    two: "war-dro {{count}} sizhun",
    few: "war-dro {{count}} sizhun",
    many: "war-dro {{count}} a sizhunioù",
    other: "war-dro {{count}} sizhun",
  },

  xWeeks: {
    one: "{{count}} sizhun",
    two: "{{count}} sizhun",
    few: "{{count}} sizhun",
    many: "{{count}} a sizhunioù",
    other: "{{count}} sizhun",
  },

  aboutXMonths: {
    one: "war-dro {{count}} miz",
    two: "war-dro {{count}} viz",
    few: "war-dro {{count}} miz",
    many: "war-dro {{count}} a vizioù",
    other: "war-dro {{count}} miz",
  },

  xMonths: {
    one: "{{count}} miz",
    two: "{{count}} viz",
    few: "{{count}} miz",
    many: "{{count}} a vizioù",
    other: "{{count}} miz",
  },

  aboutXYears: {
    one: "war-dro {{count}} bloaz",
    two: "war-dro {{count}} vloaz",
    few: "war-dro {{count}} bloaz",
    many: "war-dro {{count}} a vloazioù",
    other: "war-dro {{count}} vloaz",
  },

  xYears: {
    one: "{{count}} bloaz",
    two: "{{count}} vloaz",
    few: "{{count}} bloaz",
    many: "{{count}} a vloazioù",
    other: "{{count}} vloaz",
  },

  overXYears: {
    one: "ouzhpenn {{count}} bloaz",
    two: "ouzhpenn {{count}} vloaz",
    few: "ouzhpenn {{count}} bloaz",
    many: "ouzhpenn {{count}} a vloazioù",
    other: "ouzhpenn {{count}} vloaz",
  },

  almostXYears: {
    one: "tost {{count}} bloaz",
    two: "tost {{count}} vloaz",
    few: "tost {{count}} bloaz",
    many: "tost {{count}} a vloazioù",
    other: "tost {{count}} vloaz",
  },
};

// CLDR plural rules for Breton:
// https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#br
function getPluralKey(count: number): PluralKey {
  const rem10 = count % 10;
  const rem100 = count % 100;

  if (rem10 === 1 && rem100 !== 11 && rem100 !== 71 && rem100 !== 91) {
    return "one";
  }

  if (rem10 === 2 && rem100 !== 12 && rem100 !== 72 && rem100 !== 92) {
    return "two";
  }

  if (
    (rem10 === 3 || rem10 === 4 || rem10 === 9) &&
    (rem100 < 10 || rem100 > 19) &&
    (rem100 < 70 || rem100 > 79) &&
    (rem100 < 90 || rem100 > 99)
  ) {
    return "few";
  }

  if (count !== 0 && count % 1000000 === 0) {
    return "many";
  }

  return "other";
}

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else {
    const key = getPluralKey(count);

    result = tokenValue[key].replace("{{count}}", String(count));
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "a-benn " + result;
    } else {
      return result + " zo";
    }
  }

  return result;
};
