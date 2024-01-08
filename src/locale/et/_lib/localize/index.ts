import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["e.m.a", "m.a.j"] as const,
  abbreviated: ["e.m.a", "m.a.j"] as const,
  wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] as const,
};

const monthValues = {
  narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "jaan",
    "veebr",
    "märts",
    "apr",
    "mai",
    "juuni",
    "juuli",
    "aug",
    "sept",
    "okt",
    "nov",
    "dets",
  ] as const,
  wide: [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember",
  ] as const,
};

const dayValues = {
  narrow: ["P", "E", "T", "K", "N", "R", "L"] as const,
  short: ["P", "E", "T", "K", "N", "R", "L"] as const,
  abbreviated: [
    "pühap.",
    "esmasp.",
    "teisip.",
    "kolmap.",
    "neljap.",
    "reede.",
    "laup.",
  ] as const,
  wide: [
    "pühapäev",
    "esmaspäev",
    "teisipäev",
    "kolmapäev",
    "neljapäev",
    "reede",
    "laupäev",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel",
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
    formattingValues: monthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: dayValues,
    defaultFormattingWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
