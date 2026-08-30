import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";
import type { Localize, LocalizeFn } from "../../../types.js";

const eraValues = {
  narrow: ["tal. J.-K", "tao. J.-K"] as const,
  abbreviated: ["tal. J.-K", "tao. J.-K"] as const,
  wide: ["talohan'ny Jesoa Kristy", "taorian'ny Jesoa Kristy"] as const,
};

const quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"] as const,
  abbreviated: [
    "tel. voalohany",
    "tel. faha-2",
    "tel. faha-3",
    "tel. faha-4",
  ] as const,
  wide: [
    "telovolana voalohany",
    "telovolana faha-2",
    "telovolana faha-3",
    "telovolana faha-4",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "jan.",
    "feb.",
    "mar",
    "apr.",
    "may",
    "jona",
    "jolay",
    "aog.",
    "sept.",
    "okt.",
    "nov.",
    "des.",
  ] as const,
  wide: [
    "janoary",
    "febroary",
    "martsa",
    "aprily",
    "may",
    "jona",
    "jolay",
    "aogositra",
    "septambra",
    "oktobra",
    "novambra",
    "desambra",
  ] as const,
};

const dayValues = {
  narrow: ["A", "A", "T", "A", "A", "Z", "S"] as const,
  short: ["ah", "at", "ta", "ar", "ak", "zo", "sa"] as const,
  abbreviated: [
    "alah.",
    "alat.",
    "tal.",
    "alar.",
    "alak.",
    "zom.",
    "sab.",
  ] as const,
  wide: [
    "Alahady",
    "Alatsinainy",
    "Talata",
    "Alarobia",
    "Alakamisy",
    "Zoma",
    "Sabotsy",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "s.a.",
    noon: "mit.v.",
    morning: "mar.",
    afternoon: "tol.",
    evening: "har.",
    night: "al.",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "sasak'alina",
    noon: "mitatao vovonana",
    morning: "maraina",
    afternoon: "tolak'andro",
    evening: "hariva",
    night: "alina",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "sasak'alina",
    noon: "mitatao vovonana",
    morning: "maraina",
    afternoon: "tolak'andro",
    evening: "hariva",
    night: "alina",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;

  if (number === 0) return "0";

  if (number === 1) {
    return "voalohany";
  }

  return "faha-" + number;
};

const LONG_MONTHS_TOKENS = ["MMM", "MMMM"];

export const localize: Localize = {
  preprocessor: (date, parts) => {
    // Replaces the `do` tokens with `d` when used with long month tokens and the day of the month is greater than one.
    // Use case "do MMMM" => 1er août, 29 août
    // see https://github.com/date-fns/date-fns/issues/1391

    if (date.getDate() === 1) return parts;

    const hasLongMonthToken = parts.some(
      (part) => part.isToken && LONG_MONTHS_TOKENS.includes(part.value),
    );

    if (!hasLongMonthToken) return parts;

    return parts.map((part) =>
      part.isToken && part.value === "do"
        ? { isToken: true, value: "d" }
        : part,
    );
  },

  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
};
