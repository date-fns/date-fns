import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["p.K.", "mb.K."] as const,
  abbreviated: ["p.K.", "mb.K."] as const,
  wide: ["para Krishtit", "mbas Krishtit"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: [
    "Tremujori I",
    "Tremujori II",
    "Tremujori III",
    "Tremujori IV",
  ] as const,
  wide: [
    "Tremujori i 1-rë",
    "Tremujori i 2-të",
    "Tremujori i 3-të",
    "Tremujori i 4-t",
  ] as const,
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: [
    "tremujori I",
    "tremujori II",
    "tremujori III",
    "tremujori IV",
  ] as const,
  wide: [
    "tremujori i parë",
    "tremujori i dytë",
    "tremujori i tretë",
    "tremujori i katërt",
  ] as const,
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    "j",
    "sh",
    "m",
    "p",
    "m",
    "q",
    "k",
    "g",
    "sh",
    "t",
    "n",
    "dh",
  ] as const,
  abbreviated: [
    "jan",
    "shk",
    "mar",
    "pri",
    "maj",
    "qer",
    "korr",
    "gush",
    "sht",
    "tet",
    "nën",
    "dhj",
  ] as const,
  wide: [
    "janar",
    "shkurt",
    "mars",
    "prill",
    "maj",
    "qershor",
    "korrik",
    "gusht",
    "shtator",
    "tetor",
    "nëntor",
    "dhjetor",
  ] as const,
};

const dayValues = {
  narrow: ["d", "h", "m", "m", "e", "p", "sh"] as const,
  short: ["die", "hën", "mar", "mër", "enj", "pre", "sht"] as const,
  abbreviated: ["die", "hën", "mar", "mër", "enj", "pre", "sht"] as const,
  wide: [
    "e diel",
    "e hënë",
    "e martë",
    "e mërkurë",
    "e enjte",
    "e premte",
    "e shtunë",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesnatë",
    noon: "mesditë",
    morning: "mëngjes",
    afternoon: "pasdite",
    evening: "mbrëmje",
    night: "natë",
  },
  abbreviated: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesnatë",
    noon: "mesditë",
    morning: "mëngjes",
    afternoon: "pasdite",
    evening: "mbrëmje",
    night: "natë",
  },
  wide: {
    am: "paradite",
    pm: "pasdite",
    midnight: "mesnatë",
    noon: "mesditë",
    morning: "mëngjes",
    afternoon: "pasdite",
    evening: "mbrëmje",
    night: "natë",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "e mesnatës",
    noon: "e mesditës",
    morning: "e mëngjesit",
    afternoon: "e pasdites",
    evening: "e mbrëmjes",
    night: "e natës",
  },
  abbreviated: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "e mesnatës",
    noon: "e mesditës",
    morning: "e mëngjesit",
    afternoon: "e pasdites",
    evening: "e mbrëmjes",
    night: "e natës",
  },
  wide: {
    am: "e paradites",
    pm: "e pasdites",
    midnight: "e mesnatës",
    noon: "e mesditës",
    morning: "e mëngjesit",
    afternoon: "e pasdites",
    evening: "e mbrëmjes",
    night: "e natës",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);

  if (options?.unit === "hour") return String(number);

  if (number === 1) return number + "-rë";

  if (number % 10 === 4 && number % 100 !== 14) return number + "-t";

  return number + "-të";
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
