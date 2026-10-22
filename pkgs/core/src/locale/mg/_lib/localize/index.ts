import type { Localize, LocalizeFn } from "../../../types.ts";
import type { Quarter } from "../../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["BC", "AD"] as const,
  abbreviated: ["BC", "AD"] as const,
  wide: ["Alohan'i Kristy", "Aorian'i Kristy"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["T1", "T2", "T3", "T4"] as const,
  wide: [
    "Telovolana voalohany",
    "Telovolana faharoa",
    "Telovolana fahatelo",
    "Telovolana fahefatra",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mey",
    "Jon",
    "Jol",
    "Aog",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ] as const,
  wide: [
    "Janoary",
    "Febroary",
    "Martsa",
    "Aprily",
    "Mey",
    "Jona",
    "Jolay",
    "Aogositra",
    "Septambra",
    "Oktobra",
    "Novambra",
    "Desambra",
  ] as const,
};

const dayValues = {
  narrow: ["A", "A", "T", "A", "A", "Z", "A"] as const,
  short: ["Ah", "At", "Ta", "Ar", "Ak", "Zo", "As"] as const,
  abbreviated: ["Alh", "Alt", "Tal", "Ala", "Alk", "Zom", "Asb"] as const,
  wide: [
    "Alahady",
    "Alatsinainy",
    "Talata",
    "Alarobia",
    "Alakamisy",
    "Zoma",
    "Asabotsy",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "misasakalina",
    noon: "mitataovovonana",
    morning: "maraina",
    afternoon: "tolakandro",
    evening: "hariva",
    night: "alina",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "misasakalina",
    noon: "mitataovovonana",
    morning: "maraina",
    afternoon: "tolakandro",
    evening: "hariva",
    night: "alina",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "misasakalina",
    noon: "mitataovovonana",
    morning: "maraina",
    afternoon: "tolakandro",
    evening: "hariva",
    night: "alina",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return "faha-" + number;
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
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
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
