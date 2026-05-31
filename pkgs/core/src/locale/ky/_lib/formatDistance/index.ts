import type { FormatDistanceFn, FormatDistanceLocale } from "../../../types.ts";

type FormatDistanceTokenValue =
  | string
  | {
      one: string;
      other: string;
      futureOne?: string;
      futureOther?: string;
      pastOne?: string;
      pastOther?: string;
    };

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: "1 секунддан аз",
    other: "{{count}} секунддан аз",
    futureOne: "1 секунддан аз убакыттан кийин",
    futureOther: "{{count}} секунддан аз убакыттан кийин",
    pastOne: "1 секунддан аз убакыт мурун",
    pastOther: "{{count}} секунддан аз убакыт мурун",
  },

  xSeconds: {
    one: "1 секунд",
    other: "{{count}} секунд",
    futureOne: "1 секунддан кийин",
    futureOther: "{{count}} секунддан кийин",
    pastOne: "1 секунд мурун",
    pastOther: "{{count}} секунд мурун",
  },

  halfAMinute: "жарым мүнөт",

  lessThanXMinutes: {
    one: "1 мүнөттөн аз",
    other: "{{count}} мүнөттөн аз",
    futureOne: "1 мүнөттөн аз убакыттан кийин",
    futureOther: "{{count}} мүнөттөн аз убакыттан кийин",
    pastOne: "1 мүнөттөн аз убакыт мурун",
    pastOther: "{{count}} мүнөттөн аз убакыт мурун",
  },

  xMinutes: {
    one: "1 мүнөт",
    other: "{{count}} мүнөт",
    futureOne: "1 мүнөттөн кийин",
    futureOther: "{{count}} мүнөттөн кийин",
    pastOne: "1 мүнөт мурун",
    pastOther: "{{count}} мүнөт мурун",
  },

  aboutXHours: {
    one: "болжол менен 1 саат",
    other: "болжол менен {{count}} саат",
    futureOne: "болжол менен 1 сааттан кийин",
    futureOther: "болжол менен {{count}} сааттан кийин",
    pastOne: "болжол менен 1 саат мурун",
    pastOther: "болжол менен {{count}} саат мурун",
  },

  xHours: {
    one: "1 саат",
    other: "{{count}} саат",
    futureOne: "1 сааттан кийин",
    futureOther: "{{count}} сааттан кийин",
    pastOne: "1 саат мурун",
    pastOther: "{{count}} саат мурун",
  },

  xDays: {
    one: "1 күн",
    other: "{{count}} күн",
    futureOne: "1 күндөн кийин",
    futureOther: "{{count}} күндөн кийин",
    pastOne: "1 күн мурун",
    pastOther: "{{count}} күн мурун",
  },

  aboutXWeeks: {
    one: "болжол менен 1 апта",
    other: "болжол менен {{count}} апта",
    futureOne: "болжол менен 1 аптадан кийин",
    futureOther: "болжол менен {{count}} аптадан кийин",
    pastOne: "болжол менен 1 апта мурун",
    pastOther: "болжол менен {{count}} апта мурун",
  },

  xWeeks: {
    one: "1 апта",
    other: "{{count}} апта",
    futureOne: "1 аптадан кийин",
    futureOther: "{{count}} аптадан кийин",
    pastOne: "1 апта мурун",
    pastOther: "{{count}} апта мурун",
  },

  aboutXMonths: {
    one: "болжол менен 1 ай",
    other: "болжол менен {{count}} ай",
    futureOne: "болжол менен 1 айдан кийин",
    futureOther: "болжол менен {{count}} айдан кийин",
    pastOne: "болжол менен 1 ай мурун",
    pastOther: "болжол менен {{count}} ай мурун",
  },

  xMonths: {
    one: "1 ай",
    other: "{{count}} ай",
    futureOne: "1 айдан кийин",
    futureOther: "{{count}} айдан кийин",
    pastOne: "1 ай мурун",
    pastOther: "{{count}} ай мурун",
  },

  aboutXYears: {
    one: "болжол менен 1 жыл",
    other: "болжол менен {{count}} жыл",
    futureOne: "болжол менен 1 жылдан кийин",
    futureOther: "болжол менен {{count}} жылдан кийин",
    pastOne: "болжол менен 1 жыл мурун",
    pastOther: "болжол менен {{count}} жыл мурун",
  },

  xYears: {
    one: "1 жыл",
    other: "{{count}} жыл",
    futureOne: "1 жылдан кийин",
    futureOther: "{{count}} жылдан кийин",
    pastOne: "1 жыл мурун",
    pastOther: "{{count}} жыл мурун",
  },

  overXYears: {
    one: "1 жылдан ашык",
    other: "{{count}} жылдан ашык",
    futureOne: "1 жылдан ашык убакыттан кийин",
    futureOther: "{{count}} жылдан ашык убакыттан кийин",
    pastOne: "1 жылдан ашык убакыт мурун",
    pastOther: "{{count}} жылдан ашык убакыт мурун",
  },

  almostXYears: {
    one: "дээрлик 1 жыл",
    other: "дээрлик {{count}} жыл",
    futureOne: "дээрлик 1 жылдан кийин",
    futureOther: "дээрлик {{count}} жылдан кийин",
    pastOne: "дээрлик 1 жыл мурун",
    pastOther: "дээрлик {{count}} жыл мурун",
  },
};

function buildLocalizeTokenValue(
  tokenValue: Exclude<FormatDistanceTokenValue, string>,
  count: number,
  key: "one" | "other" | "futureOne" | "futureOther" | "pastOne" | "pastOther",
): string {
  const value = tokenValue[key] || tokenValue[count === 1 ? "one" : "other"];
  return value.replace("{{count}}", String(count));
}

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  const tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === "string") {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return tokenValue + "төн кийин";
      } else {
        return tokenValue + " мурун";
      }
    }

    return tokenValue;
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return buildLocalizeTokenValue(
        tokenValue,
        count,
        count === 1 ? "futureOne" : "futureOther",
      );
    } else {
      return buildLocalizeTokenValue(
        tokenValue,
        count,
        count === 1 ? "pastOne" : "pastOther",
      );
    }
  }

  return buildLocalizeTokenValue(
    tokenValue,
    count,
    count === 1 ? "one" : "other",
  );
};
