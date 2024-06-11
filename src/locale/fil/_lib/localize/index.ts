import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["BC", "AD"] as const,
  abbreviated: ["BC", "AD"] as const,
  wide: ["Bago si Kristo", "Anno Domini"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Q1", "Q2", "Q3", "Q4"] as const,
  wide: [
    "Unang Kwarto",
    "Ikalawang Kwarto",
    "Ikatlong Kwarto",
    "Ikaapat na Kwarto",
  ] as const,
};

const monthValues = {
  narrow: ["E", "P", "M", "A", "M", "H", "H", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Ene",
    "Peb",
    "Mar",
    "Abr",
    "May",
    "Hun",
    "Hul",
    "Ago",
    "Set",
    "Okt",
    "Nob",
    "Dis",
  ] as const,
  wide: [
    "Enero",
    "Pebrero",
    "Marso",
    "Abril",
    "Mayo",
    "Hunyo",
    "Hulyo",
    "Agosto",
    "Setyembre",
    "Oktubre",
    "Nobyembre",
    "Disyembre",
  ] as const,
};

const dayValues = {
  narrow: ["L", "L", "M", "M", "H", "B", "S"] as const,
  short: ["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"] as const,
  abbreviated: [
    "Linggo",
    "Lunes",
    "Martes",
    "Miyerkules",
    "Huwebes",
    "Biyernes",
    "Sabado",
  ] as const,
  wide: [
    "Linggo",
    "Lunes",
    "Martes",
    "Miyerkules",
    "Huwebes",
    "Biyernes",
    "Sabado",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "md",
    noon: "tn",
    morning: "umaga",
    afternoon: "hapon",
    evening: "gabi",
    night: "gabi",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "hatinggabi",
    noon: "tanghali",
    morning: "umaga",
    afternoon: "hapon",
    evening: "gabi",
    night: "gabi",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "hatinggabi",
    noon: "tanghali",
    morning: "umaga",
    afternoon: "hapon",
    evening: "gabi",
    night: "gabi",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "md",
    noon: "tn",
    morning: "ng umaga",
    afternoon: "ng hapon",
    evening: "ng gabi",
    night: "ng gabi",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "hatinggabi",
    noon: "tanghali",
    morning: "ng umaga",
    afternoon: "ng hapon",
    evening: "ng gabi",
    night: "ng gabi",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "hatinggabi",
    noon: "tanghali",
    morning: "ng umaga",
    afternoon: "ng hapon",
    evening: "ng gabi",
    night: "ng gabi",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
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