import type { Localize, LocalizeFn } from "../../../types.js";
import { buildLocalizeFn } from "../../../_lib/buildLocalizeFn/index.js";

const eraValues = {
  narrow: ["Q", "W"] as const,
  abbreviated: ["QK", "WK"] as const,
  wide: ["qabel Kristu", "wara Kristu"] as const,
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"] as const,
  abbreviated: ["K1", "K2", "K3", "K4"] as const,
  wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"] as const,
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"] as const,
  abbreviated: [
    "Jan",
    "Fra",
    "Mar",
    "Apr",
    "Mej",
    "Ġun",
    "Lul",
    "Aww",
    "Set",
    "Ott",
    "Nov",
    "Diċ",
  ] as const,
  wide: [
    "Jannar",
    "Frar",
    "Marzu",
    "April",
    "Mejju",
    "Ġunju",
    "Lulju",
    "Awwissu",
    "Settembru",
    "Ottubru",
    "Novembru",
    "Diċembru",
  ] as const,
};

const dayValues = {
  narrow: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"] as const,
  short: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"] as const,
  abbreviated: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"] as const,
  wide: [
    "Il-Ħadd",
    "It-Tnejn",
    "It-Tlieta",
    "L-Erbgħa",
    "Il-Ħamis",
    "Il-Ġimgħa",
    "Is-Sibt",
  ] as const,
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
};

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "º";
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
