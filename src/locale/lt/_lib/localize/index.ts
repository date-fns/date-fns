import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["pr. Kr.", "po Kr."] as const,
  abbreviated: ["pr. Kr.", "po Kr."] as const,
  wide: ["prieš Kristų", "po Kristaus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."] as const,
  wide: [
    "I ketvirtis",
    "II ketvirtis",
    "III ketvirtis",
    "IV ketvirtis",
  ] as const,
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["I k.", "II k.", "III k.", "IV k."] as const,
  wide: [
    "I ketvirtis",
    "II ketvirtis",
    "III ketvirtis",
    "IV ketvirtis",
  ] as const,
};

const monthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"] as const,
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod.",
  ] as const,
  wide: [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužė",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis",
  ] as const,
};

const formattingMonthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"] as const,
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod.",
  ] as const,
  wide: [
    "sausio",
    "vasario",
    "kovo",
    "balandžio",
    "gegužės",
    "birželio",
    "liepos",
    "rugpjūčio",
    "rugsėjo",
    "spalio",
    "lapkričio",
    "gruodžio",
  ] as const,
};

const dayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"] as const,
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"] as const,
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"] as const,
  wide: [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis",
  ] as const,
};

const formattingDayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"] as const,
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"] as const,
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"] as const,
  wide: [
    "sekmadienį",
    "pirmadienį",
    "antradienį",
    "trečiadienį",
    "ketvirtadienį",
    "penktadienį",
    "šeštadienį",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "-oji";
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
    formattingValues: formattingDayValues,
    defaultFormattingWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
