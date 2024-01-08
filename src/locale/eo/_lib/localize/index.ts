import type { Localize, LocalizeFn } from "../../../types.js";
import type { Quarter } from "../../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["aK", "pK"] as const,
  abbreviated: ["a.K.E.", "p.K.E."] as const,
  wide: ["antaŭ Komuna Erao", "Komuna Erao"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: [
    "1-a kvaronjaro",
    "2-a kvaronjaro",
    "3-a kvaronjaro",
    "4-a kvaronjaro",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "aŭg",
    "sep",
    "okt",
    "nov",
    "dec",
  ] as const,
  wide: [
    "januaro",
    "februaro",
    "marto",
    "aprilo",
    "majo",
    "junio",
    "julio",
    "aŭgusto",
    "septembro",
    "oktobro",
    "novembro",
    "decembro",
  ] as const,
};

const dayValues = {
  narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"] as const,
  short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"] as const,
  abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"] as const,
  wide: [
    "dimanĉo",
    "lundo",
    "mardo",
    "merkredo",
    "ĵaŭdo",
    "vendredo",
    "sabato",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
  abbreviated: {
    am: "a.t.m.",
    pm: "p.t.m.",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
  wide: {
    am: "antaŭtagmeze",
    pm: "posttagmeze",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber) => {
  const number = Number(dirtyNumber);
  return number + "-a";
};

export const localize: Localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function (quarter) {
      return (Number(quarter) - 1) as Quarter;
    },
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
