import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["v.Chr.", "n.Chr."] as const,
  abbreviated: ["v.Chr.", "n.Chr."] as const,
  wide: ["viru Christus", "no Christus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Q1", "Q2", "Q3", "Q4"] as const,
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Jan",
    "Feb",
    "Mäe",
    "Abr",
    "Mee",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ] as const,
  wide: [
    "Januar",
    "Februar",
    "Mäerz",
    "Abrëll",
    "Mee",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ] as const,
};

const dayValues = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"] as const,
  short: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"] as const,
  abbreviated: ["So.", "Mé.", "Dë.", "Më.", "Do.", "Fr.", "Sa."] as const,
  wide: [
    "Sonndeg",
    "Méindeg",
    "Dënschdeg",
    "Mëttwoch",
    "Donneschdeg",
    "Freideg",
    "Samschdeg",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nomë.",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
  abbreviated: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
  wide: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "Mëtteg",
    morning: "Moien",
    afternoon: "Nomëtteg",
    evening: "Owend",
    night: "Nuecht",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nom.",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
  abbreviated: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
  wide: {
    am: "moies",
    pm: "nomëttes",
    midnight: "Mëtternuecht",
    noon: "mëttes",
    morning: "moies",
    afternoon: "nomëttes",
    evening: "owes",
    night: "nuets",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + ".";
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
