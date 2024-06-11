import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["KK", "BK"] as const,
  abbreviated: ["KK", "BK"] as const,
  wide: ["Kabla ya Kristo", "Baada ya Kristo"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["R1", "R2", "R3", "R4"] as const,
  wide: [
    "Robo ya Kwanza",
    "Robo ya Pili",
    "Robo ya Tatu",
    "Robo ya Nne",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Jan",
    "Feb",
    "Mac",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ] as const,
  wide: [
    "Januari",
    "Februari",
    "Machi",
    "Aprili",
    "Mei",
    "Juni",
    "Julai",
    "Agosti",
    "Septemba",
    "Oktoba",
    "Novemba",
    "Desemba",
  ] as const,
};

const dayValues = {
  narrow: ["J", "J", "J", "J", "A", "I", "J"] as const,
  short: ["Jpl", "Jtat", "Jnne", "Jtan", "Alh", "Ijm", "Jmos"] as const,
  abbreviated: [
    "Jumapili",
    "Jumatatu",
    "Jumanne",
    "Jumatano",
    "Alhamisi",
    "Ijumaa",
    "Jumamosi",
  ] as const,
  wide: [
    "Jumapili",
    "Jumatatu",
    "Jumanne",
    "Jumatano",
    "Alhamisi",
    "Ijumaa",
    "Jumamosi",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mn",
    noon: "md",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "saa sita usiku",
    noon: "saa sita mchana",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "saa sita usiku",
    noon: "saa sita mchana",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mn",
    noon: "md",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "saa sita usiku",
    noon: "saa sita mchana",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "saa sita usiku",
    noon: "saa sita mchana",
    morning: "asubuhi",
    afternoon: "mchana",
    evening: "jioni",
    night: "usiku",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return String(number); 
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