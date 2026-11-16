import type { Localize, LocalizeFn } from "../../../types.ts";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.ts";

const eraValues = {
  narrow: ["M.A", "M."] as const,
  abbreviated: ["M.A", "M."] as const,
  wide: ["miloddan avvalgi", "milodiy"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["1-chor.", "2-chor.", "3-chor.", "4-chor."] as const,
  wide: ["1-chorak", "2-chorak", "3-chorak", "4-chorak"] as const,
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "yan",
    "fev",
    "mar",
    "apr",
    "may",
    "iyun",
    "iyul",
    "avg",
    "sen",
    "okt",
    "noy",
    "dek",
  ] as const,
  wide: [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ] as const,
};

const dayValues = {
  narrow: ["Y", "D", "S", "CH", "P", "J", "SH"] as const,
  short: ["ya", "du", "se", "cho", "pa", "ju", "sha"] as const,
  abbreviated: ["yak", "dush", "sesh", "chor", "pay", "jum", "shan"] as const,
  wide: [
    "yakshanba",
    "dushanba",
    "seshanba",
    "chorshanba",
    "payshanba",
    "juma",
    "shanba",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "y.t",
    noon: "p.",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "y.t",
    noon: "p.",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  return String(dirtyNumber);
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
