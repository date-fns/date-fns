import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["v.C.", "n.C."] as const,
  abbreviated: ["v.Chr.", "n.Chr."] as const,
  wide: ["voor Christus", "na Christus"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mei",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec.",
  ] as const,
  wide: [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ] as const,
};

const dayValues = {
  narrow: ["Z", "M", "D", "W", "D", "V", "Z"] as const,
  short: ["zo", "ma", "di", "wo", "do", "vr", "za"] as const,
  abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"] as const,
  wide: [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middag",
    morning: "'s ochtends",
    afternoon: "'s namiddags",
    evening: "'s avonds",
    night: "'s nachts",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middag",
    morning: "'s ochtends",
    afternoon: "'s namiddags",
    evening: "'s avonds",
    night: "'s nachts",
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middag",
    morning: "'s ochtends",
    afternoon: "'s namiddags",
    evening: "'s avonds",
    night: "'s nachts",
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
