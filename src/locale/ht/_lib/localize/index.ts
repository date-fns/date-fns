import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["av. J.-K", "ap. J.-K"] as const,
  abbreviated: ["av. J.-K", "ap. J.-K"] as const,
  wide: ["anvan Jezi Kris", "apre Jezi Kris"] as const,
};

const quarterValues = {
  narrow: ["T1", "T2", "T3", "T4"] as const,
  abbreviated: ["1ye trim.", "2yèm trim.", "3yèm trim.", "4yèm trim."] as const,
  wide: ["1ye trimès", "2yèm trimès", "3yèm trimès", "4yèm trimès"] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"] as const,
  abbreviated: [
    "janv.",
    "fevr.",
    "mas",
    "avr.",
    "me",
    "jen",
    "jiyè",
    "out",
    "sept.",
    "okt.",
    "nov.",
    "des.",
  ] as const,
  wide: [
    "janvye",
    "fevrye",
    "mas",
    "avril",
    "me",
    "jen",
    "jiyè",
    "out",
    "septanm",
    "oktòb",
    "novanm",
    "desanm",
  ] as const,
};

const dayValues = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"] as const,
  short: ["di", "le", "ma", "mè", "je", "va", "sa"] as const,
  abbreviated: [
    "dim.",
    "len.",
    "mad.",
    "mèk.",
    "jed.",
    "van.",
    "sam.",
  ] as const,
  wide: [
    "dimanch",
    "lendi",
    "madi",
    "mèkredi",
    "jedi",
    "vandredi",
    "samdi",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "swa",
    night: "mat.",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "maten",
    afternoon: "aprèmidi",
    evening: "swa",
    night: "maten",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "nan maten",
    afternoon: "nan aprèmidi",
    evening: "nan aswè",
    night: "nan maten",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  if (number === 0) return String(number);

  const suffix = number === 1 ? "ye" : "yèm";

  return number + suffix;
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
