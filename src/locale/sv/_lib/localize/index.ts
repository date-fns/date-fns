import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["f.Kr.", "e.Kr."] as const,
  abbreviated: ["f.Kr.", "e.Kr."] as const,
  wide: ["före Kristus", "efter Kristus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Q1", "Q2", "Q3", "Q4"] as const,
  wide: [
    "1:a kvartalet",
    "2:a kvartalet",
    "3:e kvartalet",
    "4:e kvartalet",
  ] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "maj",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec.",
  ] as const,
  wide: [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december",
  ] as const,
};

const dayValues = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"] as const,
  short: ["sö", "må", "ti", "on", "to", "fr", "lö"] as const,
  abbreviated: ["sön", "mån", "tis", "ons", "tors", "fre", "lör"] as const,
  wide: [
    "söndag",
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
  ] as const,
};

// https://www.unicode.org/cldr/charts/32/summary/sv.html#1888
const dayPeriodValues = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "morg.",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt",
  },
  abbreviated: {
    am: "f.m.",
    pm: "e.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt",
  },
  wide: {
    am: "förmiddag",
    pm: "eftermiddag",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "eftermiddag",
    evening: "kväll",
    night: "natt",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten",
  },
  abbreviated: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten",
  },
  wide: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgonen",
    afternoon: "på eftermiddagen",
    evening: "på kvällen",
    night: "på natten",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ":a";
    }
  }
  return number + ":e";
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
