import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["f.K.", "n.K."] as const,
  abbreviated: ["f.Kr.", "n.Kr."] as const,
  wide: ["foar Kristus", "nei Kristus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: [
    "1e fearnsjier",
    "2e fearnsjier",
    "3e fearnsjier",
    "4e fearnsjier",
  ] as const,
};

const monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"] as const,
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mai.",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des.",
  ] as const,
  wide: [
    "jannewaris",
    "febrewaris",
    "maart",
    "april",
    "maaie",
    "juny",
    "july",
    "augustus",
    "septimber",
    "oktober",
    "novimber",
    "desimber",
  ] as const,
};

const dayValues = {
  narrow: ["s", "m", "t", "w", "t", "f", "s"] as const,
  short: ["si", "mo", "ti", "wo", "to", "fr", "so"] as const,
  abbreviated: ["snein", "moa", "tii", "woa", "ton", "fre", "sneon"] as const,
  wide: [
    "snein",
    "moandei",
    "tiisdei",
    "woansdei",
    "tongersdei",
    "freed",
    "sneon",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "middei",
    morning: "moarns",
    afternoon: "middeis",
    evening: "jûns",
    night: "nachts",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "e";
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
  }),
};
