import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["o.Kr.", "m.Kr."] as const,
  abbreviated: ["o.Kr.", "m.Kr."] as const,
  wide: ["ovdal Kristusa", "maŋŋel Kristusa"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["Q1", "Q2", "Q3", "Q4"] as const,
  wide: ["1. kvartála", "2. kvartála", "3. kvartála", "4. kvartála"] as const,
};

const monthValues = {
  narrow: ["O", "G", "N", "C", "M", "G", "S", "B", "Č", "G", "S", "J"] as const,
  abbreviated: [
    "ođđa",
    "guov",
    "njuk",
    "cuo",
    "mies",
    "geas",
    "suoi",
    "borg",
    "čakč",
    "golg",
    "skáb",
    "juov",
  ] as const,
  wide: [
    "ođđajagemánnu",
    "guovvamánnu",
    "njukčamánnu",
    "cuoŋománnu",
    "miessemánnu",
    "geassemánnu",
    "suoidnemánnu",
    "borgemánnu",
    "čakčamánnu",
    "golggotmánnu",
    "skábmamánnu",
    "juovlamánnu",
  ] as const,
};

const dayValues = {
  narrow: ["S", "V", "M", "G", "D", "B", "L"] as const,
  short: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"] as const,
  abbreviated: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"] as const,
  wide: [
    "sotnabeaivi",
    "vuossárga",
    "maŋŋebárga",
    "gaskavahkku",
    "duorastat",
    "bearjadat",
    "lávvardat",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gaskaidja",
    noon: "gaskabeaivi",
    morning: "iđđes",
    afternoon: "maŋŋel gaska.",
    evening: "eahkes",
    night: "ihkku",
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeaivvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabea.",
    evening: "eahkes",
    night: "ihkku",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeavvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabeaivvi",
    evening: "eahkes",
    night: "ihkku",
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
  }),
};
