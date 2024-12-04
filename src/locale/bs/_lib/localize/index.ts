import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["pr.n.e.", "AD"] as const,
  abbreviated: ["pr. Hr.", "po. Hr."] as const,
  wide: ["Prije Hrista", "Poslije Hrista"] as const,
};

const quarterValues = {
  narrow: ["1.", "2.", "3.", "4."] as const,
  abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."] as const,
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] as const,
};

const monthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ] as const,
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "avg",
    "sep",
    "okt",
    "nov",
    "dec",
  ] as const,
  wide: [
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "juni",
    "juli",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar",
  ] as const,
};

const formattingMonthValues = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12.",
  ] as const,
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "avg",
    "sep",
    "okt",
    "nov",
    "dec",
  ] as const,
  wide: [
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "juni",
    "juli",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar",
  ] as const,
};

const dayValues = {
  narrow: ["N", "P", "U", "S", "Č", "P", "S"] as const,
  short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"] as const,
  abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"] as const,
  wide: [
    "nedjelja",
    "ponedjeljak",
    "utorak",
    "srijeda",
    "četvrtak",
    "petak",
    "subota",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "poslije podne",
    evening: "uveče",
    night: "noću",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "poslije podne",
    evening: "uveče",
    night: "noću",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return String(number) + ".";
};

export const localize: Localize = {
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
