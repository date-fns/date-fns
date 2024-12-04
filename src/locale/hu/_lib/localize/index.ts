import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["ie.", "isz."] as const,
  abbreviated: ["i. e.", "i. sz."] as const,
  wide: ["Krisztus előtt", "időszámításunk szerint"] as const,
};

const quarterValues = {
  narrow: ["1.", "2.", "3.", "4."] as const,
  abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"] as const,
  wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"] as const,
};

const formattingQuarterValues = {
  narrow: ["I.", "II.", "III.", "IV."] as const,
  abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"] as const,
  wide: [
    "I. negyedév",
    "II. negyedév",
    "III. negyedév",
    "IV. negyedév",
  ] as const,
};

const monthValues = {
  narrow: [
    "J",
    "F",
    "M",
    "Á",
    "M",
    "J",
    "J",
    "A",
    "Sz",
    "O",
    "N",
    "D",
  ] as const,
  abbreviated: [
    "jan.",
    "febr.",
    "márc.",
    "ápr.",
    "máj.",
    "jún.",
    "júl.",
    "aug.",
    "szept.",
    "okt.",
    "nov.",
    "dec.",
  ] as const,
  wide: [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ] as const,
};

const dayValues = {
  narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"] as const,
  short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"] as const,
  abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"] as const,
  wide: [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel",
  },
  abbreviated: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel",
  },
  wide: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "délután",
    evening: "este",
    night: "éjjel",
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
