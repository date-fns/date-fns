import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";
import type { Localize, LocalizeFn } from "../../../types.js";

const eraValues = {
  narrow: ["av. J.-C", "ap. J.-C"] as const,
  abbreviated: ["av. J.-C", "ap. J.-C"] as const,
  wide: ["avant Jésus-Christ", "après Jésus-Christ"] as const,
};

const quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"] as const,
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."] as const,
  wide: [
    "1er trimestre",
    "2ème trimestre",
    "3ème trimestre",
    "4ème trimestre",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ] as const,
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ] as const,
};

const dayValues = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"] as const,
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"] as const,
  abbreviated: [
    "dim.",
    "lun.",
    "mar.",
    "mer.",
    "jeu.",
    "ven.",
    "sam.",
  ] as const,
  wide: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat.",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;

  if (number === 0) return "0";

  const feminineUnits = ["year", "week", "hour", "minute", "second"];
  let suffix;

  if (number === 1) {
    suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
  } else {
    suffix = "ème";
  }

  return number + suffix;
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
